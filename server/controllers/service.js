const catchAsyncError = require("../middlewares/catchAsyncErrors");
const { connection } = require("../db/database");
const Service = require("../models/service");
const Hotel = require("../models/hotel");
exports.createService = catchAsyncError(async (req, res, next) => {
    const { room_id, checkin, checkout, nights, duty, user_id } = req.body; 

	const service = new Service(req.body);
	try {
		const newService = await service.save();
		res.status(200).json({
			status: "success",
			service_id: newService.insertId
		});
	} catch (err) {
		console.log(err);
		res.status(400).json({
		  	err,
		});
	}	  
});

exports.rateService = catchAsyncError(async (req, res, next) => {
    const { rating, message, room_id, user_id, hotel_id} = req.body; 

	const service = new Service(req.body);
	const hotel = new Hotel(req.body);
	try {
		const ratingService = await service.rate(rating, room_id, user_id);
		const ratingHotel = await hotel.updateRating();
		
		const checkExistsql = `
			SELECT count(*)
			FROM service
			WHERE room_id = ?
			AND user_id = ?;
		`;

		const sql = `
			INSERT INTO \`comment\` (message, service_id)
			SELECT ?, id
			FROM service
			WHERE room_id = ?
			AND user_id = ?;
		`;

		try {
			connection.query(checkExistsql, [room_id, user_id], function(err, result) {
			  if (err) {
				throw err;
			  }
			  // To do: if success, redirect to the list of hotel url
			  if (result[0]['count(*)'] == 0) {
				res.status(400).json({
				  status: "User cannot rate",
				});
				return;
			  } else {
				connection.query(sql, [message, room_id, user_id], function(
				  err,
				  result2
				) {
				  if (err) {
					throw err;
				  }
				  console.log("Comment and rating were added!");
				  res.status(200).json({
					status: "success",
					rating_hotel_after_rating: ratingHotel,
				  });
				});
			  }
			});
		  } catch (error) {
			next(error);
		  }
	} catch (err) {
		console.log(err);
		res.status(400).json({
		  	err,
		});
	}
});