const { query } = require("../db/database");

const ErrorHandler = require("../utils/errorHandler");

class Hotel {
	constructor(hotel) {
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
