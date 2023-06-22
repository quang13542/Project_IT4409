const { query } = require("../db/database");
const jwt = require("jsonwebtoken");

const ErrorHandler = require("../utils/errorHandler");

class City {
	constructor(city) {
		this.id = city.id || null;
		this.name = city.name || "";
	}

	async update() {
		const currProile = (
			await query("SELECT * FROM city WHERE id = ? ", [this.id])
		)[0];

        const sql =
            "UPDATE city SET name =? WHERE id =?";
        const params = [
            this.name || currProile.name,
            this.id,
        ];
        const res = await query(sql, params);
        return res;
	}

	async save() {
		if (!this.name) {
			throw new ErrorHandler(
				"Name, rating are required.",
				400,
			);
		}
		try {
			const res = await query(
				"INSERT INTO city (name) VALUES ( ?)",
				[this.name],
			);

			return (
				await query("SELECT * FROM city WHERE id = ? ", [res.insertId])
			)[0];
		} catch (err) {
			console.log(err);
		}
	}

	static async findById(id) {
		const sql = "SELECT * FROM city WHERE id =?";
		const params = [id];
		const res = await query(sql, params);
		if (res.length > 0) {
			return new City(res[0]);
		} else throw new ErrorHandler("City not found", 400);
	}
	static async count() {
		const sql = "SELECT count(*) AS total FROM city ";
		return (await query(sql, []))[0].total;
	}

	async remove() {
		const sql = "DELETE FROM city WHERE id =?";
		const params = [this.id];
		await query(sql, params);
		return this;
	}

	getJwtToken() {
		return jwt.sign({ id: this.id }, process.env.JWT_SECRET, {
			expiresIn: process.env.JWT_EXPIRES_IN,
		});
	}
}

module.exports = City;
