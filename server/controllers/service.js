const catchAsyncError = require("../middlewares/catchAsyncErrors");
const { connection } = require("../db/database");
const Service = require("../models/service");
exports.createService = catchAsyncError(async (req, res, next) => {
    const { room_id, checkin, checkout, nights, duty, user_id } = req.body; 

	const service = new Service(req.body);
	try {
		const newService = await service.save();
		res.status(200).json({
			status: "success",
			data: newService,
		});
	} catch (err) {
		console.log(err);
		res.status(500).json({
			err,
		});
	}
});
