const catchAsyncError = require("../middlewares/catchAsyncErrors");
const Hotel = require("../models/hotel");
const { connection } = require("../db/database");

exports.filterHotel = catchAsyncError(async (req, res, next) => {
	var { city, checkin, checkout, adults, children, duty } = req.query;
	// find_hotel?page=...&limit=...
	const page = req.query.page || 1;
	const limit = req.query.limit || 10;
	if (checkin == undefined && checkout == undefined) {
		checkin = '1-01-01T20:46';
		checkout = '1-01-02T20:46';
	}
	else if (checkin == undefined) {
		checkin = checkout;
	}
	else if (checkout == undefined) {
		checkout = checkin;
	}

	const startIndex = (page - 1) * limit;
	const endIndex = page * limit;

	const sql = `
		select hotel.id, room.id as room_id, hotel.rating, hotel.name, room.adults, room.children, city.name as city_name, room.url as room_img, room.price as room_price, room.type as type
		from hotel
		join room on room.hotel_id = hotel.id
		join city on city.id = hotel.city_id
		where (
			city.name like ? and
			adults >= ? and
			children >= ? and
			room.id not in (
				select room_id
				from service
				where (
					(? BETWEEN checkin AND checkout) OR
					(? BETWEEN checkin AND checkout)
				)
			)
		)
		order by hotel.rating desc
	`;
	connection.query(sql, [`%${city}%`, adults, children, checkin.replace("T", " "), checkout.replace("T", " ")], function (err, result) {
		if (err) throw err;
		// To do: if success, redirect to the list of hotel url
		hotelList = [];
		result.forEach((row) => {
			hotelList.push({
				hotel_id: row.id,
				room_id: row.room_id,
				rating_hotel: row.rating,
				hotel_name: row.name,
				number_of_adults: row.adults,
				number_of_children: row.children,
				city_name: row.city_name,
				room_img: row.room_img,
				price: row.room_price,
				type: row.type
			});
		});
		const resultHotel = hotelList.slice(startIndex, endIndex);
		res.status(200).json(resultHotel);
	});
});

exports.getAllHotel = catchAsyncError(async (req, res, next) => {

	const page = req.query.page || 1;
	const limit = req.query.limit || 4;

	const startIndex = (page - 1) * limit;
	const endIndex = page * limit;

	const sql = `
        select * from hotel
	`;
	connection.query(sql, [], function (err, result) {
		if (err) throw err;
		// To do: if success, redirect to the list of hotel url
		hotel = []
		result.forEach((row) => {
			hotel.push({
				hotel_id: row.id,
				name: row.name,
				rating: row.rating
			});
		});
		const resultHotel = hotel.slice(startIndex, endIndex);
		res.status(200).json(resultHotel);
	});
});