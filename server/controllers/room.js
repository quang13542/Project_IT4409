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
            hotel.id as hotel_id,
            rating,
            city.name as city_name,
            room.url,
            room.position_detaill,
            room.price,
            room.room_detail
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
                hotel_id: row.hotel_id,
				number_of_adults: row.adults,
				number_of_children: row.children,
                city_name: row.city_name,
                url: row.url,
                position_detail: row.position_detaill,
                price: row.price,
                room_detail:row.room_detail
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
            room.position_detaill,
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
                position_detail: row.position_detaill,
                price: row.price
			});
		});
        const resultRoom = room.slice(startIndex, endIndex);
		res.status(200).json(resultRoom);
	});
});

exports.addRoom = catchAsyncError(async (req, res, next) => {

	const { adults, children, hotel_id, url, position_detail, price, type } = req.body;

  // const hashPassword = bcrypt.hashSync(password1, salt);
  
    const sql = "INSERT INTO room (adults, children, hotel_id, url, position_detail, price, type) VALUES (?, ?, ?, ?, ?, ?, ?)";

    try {
        await connection.query(sql, [adults, children, hotel_id, url, position_detail, price, type]);

        console.log("Room registered!");
        res.status(200).json({detail: "Room registered!"});

    } catch (error) {
        next(error);
    }
});

exports.deleteRoom = catchAsyncError(async (req, res, next) => {

	const { room_id } = req.body;
  
    const sql = `
        delete from room where id = ?;
    `;
    try {
        await connection.query(sql, [room_id]);

        console.log("Room deleted!");
        res.status(200).json({detail: "Room deleted!"});

    } catch (error) {
        next(error);
    }
});

exports.updateRoom = catchAsyncError(async (req, res, next) => {

	const { room_id, adults, children, url, position_detail, price, type} = req.body;
  
    const sql = "update room set adults=?, children=?, url=?, position_detail=?, price=?, type=? where id = ?";

    try {
        await connection.query(sql, [adults||0, children||0, url||'', position_detail||'', price||0, type||'', room_id]);

        console.log("Room updated!");
        res.status(200).json({detail: "Room updated!"});

    } catch (error) {
        next(error);
    }
});