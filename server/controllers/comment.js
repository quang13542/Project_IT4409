const catchAsyncError = require("../middlewares/catchAsyncErrors");
const { connection } = require("../db/database");

exports.getRoomComment = catchAsyncError(async (req, res, next) => {
	var { room_id } = req.query;

    const page = req.query.page || 1;
	const limit = req.query.limit || 10;

	const startIndex = (page - 1) * limit;
	const endIndex = page * limit;

	const sql = `
        SELECT *
        FROM service
        LEFT JOIN \`comment\` ON \`comment\`.service_id = service.id
        WHERE service.room_id = ?
        UNION
        SELECT *
        FROM service
        RIGHT JOIN \`comment\` ON \`comment\`.service_id = service.id
        WHERE service.room_id = ?;
    `;
	connection.query(sql, [room_id, room_id], function(err, result) {
		if (err) throw err;
		// To do: if success, redirect to the list of hotel url
		commentList = [];
		result.forEach((row) => {
			commentList.push({
				room_id: row.room_id,
                comment: row.message,
                rating: row.rating,
                user_id: row.user_id
			});
		});
		const resultComment = commentList.slice(startIndex, endIndex);
		res.status(200).json(resultComment);
	});
});

exports.addComment = catchAsyncError(async (req, res, next) => {
	var { service_id, message } = req.body;
  
    const sql = "INSERT INTO \`comment\` (service_id, message) VALUES (?, ?)";

    try {
        await connection.query(sql, [service_id, message]);

        console.log("Comment added!");
        res.status(200).json({detail: "Comment added!"});

    } catch (error) {
        next(error);
    }
});