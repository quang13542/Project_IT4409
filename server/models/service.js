const { query } = require("../db/database");

const ErrorHandler = require("../utils/errorHandler");

class Service {
	constructor(service) {
		this.id = service.id || null
		this.room_id = service.room_id || null;
		this.checkin = service.checkin || null;
        this.checkout = service.checkout || null;
        this.rating = service.rating || null;
        this.nights = service.nights || null;
        this.duty = service.duty || False;
        this.user_id = service.user_id || null;
	}

	async update() {
		const currProile = (
			await query("SELECT * FROM service WHERE id = ? ", [this.id])
		)[0];

        const sql =
            "UPDATE service SET rating =?, nights =?, WHERE id =?";
        const params = [
            this.rating || currProile.rating,
            this.nights || currProile.nights,
            this.id,
        ];
        const res = await query(sql, params);
        return res;
	}

	async save() {
		if (!this.nights || !this.checkin || !this.checkout || !this.user_id) {
			throw new ErrorHandler(
				"nights, checkin, checkout, user_id are required.",
				400,
			);
		}
		try {
			const res = await query(
				"INSERT INTO service (room_id, checkin, checkout, nights, duty, user_id) VALUES (?, ?, ?,  ?, ?, ?)",
				[this.room_id, this.checkin.replace("T", " "), this.checkout.replace("T", " "), this.nights, this.duty, this.user_id],
			);

			return (
				await query("SELECT * FROM service WHERE id = ? ", [res.insertId])
			)[0];
		} catch (err) {
			throw new ErrorHandler(
				"Timestamp from checkin to checkout of this room_id has been used",
				400,
			);
		}
	}

	static async findById(id) {
		const sql = "SELECT * FROM service WHERE id =?";
		const params = [id];
		const res = await query(sql, params);
		if (res.length > 0) {
			return new SErvice(res[0]);
		} else throw new ErrorHandler("Service not found", 400);
	}

	static async count() {
		const sql = "SELECT count(*) AS total FROM service ";
		return (await query(sql, []))[0].total;
	}

	async remove() {
		const sql = "DELETE FROM service WHERE id =?";
		const params = [this.id];
		await query(sql, params);
		return this;
	}

}

module.exports = Service;
