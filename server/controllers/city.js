const catchAsyncError = require("../middlewares/catchAsyncErrors");
const Hotel = require("../models/hotel");
const { connection } = require("../db/database");

exports.findMostRoomCity = catchAsyncError(async (req, res, next) => {
	const sql = `
    select 
        city.name as city_name,
        count(room.id) as count_room,
        sum(
            case 
                when room.type='resort' then 1
                else 0
            end
        ) as count_resort,
        sum(
            case 
                when room.type='khách sạn' then 1
                else 0
            end
        ) as count_khach_san,
        sum(
            case 
                when room.type='homestay' then 1
                else 0
            end
        ) as count_homestay
    from city
    join hotel on hotel.city_id = city.id
    join room on room.hotel_id = hotel.id
    group by city.name
    order by count(room.id) desc
    limit 4;
	`;
	connection.query(sql, [], function(err, result) {
		if (err) throw err;
		// To do: if success, redirect to the list of hotel url
		cityList = [];
		result.forEach((row) => {
			cityList.push({
				city_name: row.city_name,
				count_room: row.count_room,
                count_resort: row.count_resort,
                count_khach_san: row.count_khach_san,
                count_homestay: row.count_homestay
			});
		});
		res.status(200).json(cityList);
	});
});
