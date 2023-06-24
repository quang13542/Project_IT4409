const { query, connection } = require("../db/database");

const ErrorHandler = require("../utils/errorHandler");

class Hotel {
	constructor(hotel) {
		this.id = hotel.hotel_id || "";
		this.name = hotel.name || "";
		this.city_id = hotel.city_id || null;
        this.rating = hotel.rating || 0;
	}

	async update() {
		const currProile = (
			await query("SELECT * FROM hotel WHERE id = ? ", [this.id])
		)[0];

        const sql =
            "UPDATE hotel SET name =?, rating =?, WHERE id =?";
        const params = [
            this.name || currProile.name,
            this.rating || currProile.rating,
            this.id,
        ];
        const res = await query(sql, params);
        return res;
	}

	async save() {
		if (!this.name || !this.rating) {
			throw new ErrorHandler(
				"Name, rating are required.",
				400,
			);
		}
		try {
			const res = await query(
				"INSERT INTO hotel (name, rating) VALUES (?, ?)",
				[this.name, this.rating],
			);

			return (
				await query("SELECT * FROM hotel WHERE id = ? ", [res.insertId])
			)[0];
		} catch (err) {
			console.log(err);
		}
	}

	async updateRating() {
		try {
			const sql =
				`
					select 
						sum(
							case
								when service.rating is not null then service.rating
								else 0
							end
						)/sum(
							case
								when service.rating is not null then 1
								else 0
							end
						) as rating
					from hotel
					join room on room.hotel_id = hotel.id
					join service on service.room_id = room.id
					where hotel.id = ?;
				`;
			const newRating = await new Promise((resolve, reject) => {
				connection.query(sql, [this.id], function(err, result) {
					if (err) {
						reject(err);
					} else {
						resolve(result[0]['rating']);
					}
				});
			});
			return newRating;
		} catch (err) {
			console.log(err);
		}
	}

	static async findById(id) {
		const sql = "SELECT * FROM hotel WHERE id =?";
		const params = [id];
		const res = await query(sql, params);
		if (res.length > 0) {
			return new Hotel(res[0]);
		} else throw new ErrorHandler("Hotel not found", 400);
	}
	static async count() {
		const sql = "SELECT count(*) AS total FROM hotel ";
		return (await query(sql, []))[0].total;
	}

	async remove() {
		const sql = "DELETE FROM hotel WHERE id =?";
		const params = [this.id];
		await query(sql, params);
		return this;
	}

}

module.exports = Hotel;
