const catchAsyncError = require("../middlewares/catchAsyncErrors");
const Room = require("../models/room");
const { connection } = require("../db/database");

exports.getSingleRoom = catchAsyncError(async (req, res, next) => {
    const id = req.params.id;

    if(typeof(id)==undefined){
        res.status(400);
        return;
    }
	const sql = `
        select 
            room.id as room_id,
            adults,
            children,
            hotel.name as hotel_name,
            rating,
            city.name as city_name,
            room.url,
            room.position_detail,
            room.price
        from room
        join hotel on hotel.id = room.hotel_id
        join city on city.id = hotel.city_id
        where room.id = ?;
	`;
	connection.query(sql, [id], function(err, result) {
		if (err) throw err;
		// To do: if success, redirect to the list of hotel url
        room = []
        result.forEach((row) => {
			room.push({
				room_id: row.room_id,
				rating_hotel: row.rating,
				hotel_name: row.hotel_name,
				number_of_adults: row.adults,
				number_of_children: row.children,
                city_name: row.city_name,
                url: row.url,
                position_detail: row.position_detail,
                price: row.price
			});
		});
		if(room.length==1) res.status(200).json(room[0]);
        else res.status(400).json({error: "Room not found."});
	});
});

exports.getAllRoom = catchAsyncError(async (req, res, next) => {

    const page = req.query.page || 1;
	const limit = req.query.limit || 4;

	const startIndex = (page - 1) * limit;
	const endIndex = page * limit;

	const sql = `
        select 
            room.id as room_id,
            adults,
            children,
            hotel.name as hotel_name,
            rating,
            city.name as city_name,
            room.url,
            room.position_detail,
            room.price
        from room
        join hotel on hotel.id = room.hotel_id
        join city on city.id = hotel.city_id;
	`;
	connection.query(sql, [], function(err, result) {
		if (err) throw err;
		// To do: if success, redirect to the list of hotel url
        room = []
        result.forEach((row) => {
			room.push({
				room_id: row.room_id,
				rating_hotel: row.rating,
				hotel_name: row.hotel_name,
				number_of_adults: row.adults,
				number_of_children: row.children,
                city_name: row.city_name,
                url: row.url,
                position_detail: row.position_detail,
                price: row.price
			});
		});
        const resultRoom = room.slice(startIndex, endIndex);
		res.status(200).json(resultRoom);
	});
});