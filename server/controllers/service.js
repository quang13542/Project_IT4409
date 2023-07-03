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
		res.status(200).json({
			status: "success",
			rating_hotel_after_rating: ratingHotel
		});
		const sql = `
			INSERT INTO \`comment\` (message, service_id)
			SELECT ?, id
			FROM service
			WHERE room_id = ?
			AND user_id = ?;
		`;

		try {
			await connection.query(sql, [message, room_id, user_id]);
			console.log("Comment and rating were added!");
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