const { query } = require("../db/database");

const ErrorHandler = require("../utils/errorHandler");

class Room {
	constructor(room) {
		this.id = room.id || null;
		this.adults = room.adults || null;
		this.children = room.chldren || null;
	}

	async update() {
		const currProile = (
			await query("SELECT * FROM room WHERE id = ? ", [this.id])
		)[0];

        const sql =
            "UPDATE room SET adults =?, children =?, WHERE id =?";
        const params = [
            this.adults || currProile.adults,
            this.children || currProile.children,
            this.id,
        ];
        const res = await query(sql, params);
        return res;
	}

	async save() {
		if (!this.adults || !this.children) {
			throw new ErrorHandler(
				"Number of adults, children are required.",
				400,
			);
		}
		try {
			const res = await query(
				"INSERT INTO room (adults, children) VALUES (?, ?)",
				[this.adults, this.children],
			);

			return (
				await query("SELECT * FROM room WHERE id = ? ", [res.insertId])
			)[0];
		} catch (err) {
			console.log(err);
		}
	}

	static async findById(id) {
		const sql = "SELECT * FROM room WHERE id =?";
		const params = [id];
		const res = await query(sql, params);
		if (res.length > 0) {
			return new Room(res[0]);
		} else throw new ErrorHandler("Room not found", 400);
	}
	static async count() {
		const sql = "SELECT count(*) AS total FROM room ";
		return (await query(sql, []))[0].total;
	}

	async remove() {
		const sql = "DELETE FROM room WHERE id =?";
		const params = [this.id];
		await query(sql, params);
		return this;
	}

}

module.exports = Room;
