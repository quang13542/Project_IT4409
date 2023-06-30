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

	const { username, email, password1 } = req.body;

  // const hashPassword = bcrypt.hashSync(password1, salt);
  
    const insertUserSql = "INSERT INTO room (username, email, password) VALUES (?, ?, ?)";
    const findUserSql = "SELECT * FROM user WHERE email = ?";
    const params = [email];

    try {
        const result = await query(findUserSql, params);

        if(result.length > 0){
        res.status(409).json({
            error: "Email already exists"
        });
        return;
        }
    
        await query(insertUserSql, [username, email, password1]);

        console.log("User registered!");
        res.send("User registered!");

    } catch (error) {
        next(error);
    }
});