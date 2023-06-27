const { connection } = require("../db/database");

const bcrypt = require("bcryptjs");
const ErrorHandler = require("../utils/errorHandler");

class User {
	constructor(user) {
		this.id = user.id || null;
		this.username = user.username || null;
		this.email = user.email || "";
		this.password = user.password || null;
	}

	async update() {
		const currProile = (
			await query("SELECT * FROM user WHERE id = ? ", [this.id])
		)[0];

		if (this.password.length < 36) {
			// đổi mật khẩu
			const sql = "UPDATE user SET password = ? WHERE id = ?";
			this.password = await bcrypt.hash(this.password, 10);
			const params = [this.password, this.id];
			const res = await query(sql, params);
			return res;
		} else {
			// cập nhật email, username, ...

			const sql =
				"UPDATE user SET username =?, email =?, WHERE id =?";
			const params = [
				this.username || currProile.username,
				this.email || currProile.email,
				this.id,
			];
			const res = await query(sql, params);
			return res;
		}
	}

	async save() {
		if (!this.username || !this.email || !this.password) {
			throw new ErrorHandler(
				"username, email, and password are required.",
				400,
			);
		}
		if (this.username.length > 40) {
			throw new ErrorHandler("username is too long.", 400);
		}
		// if (this.password.length > 30 || this.password.length < 6) {
		// 	throw new ErrorHandler("Password is too long or too short.", 400);
		// }
		if (!/\S+@\S+\.\S+/.test(this.email)) {
			throw new ErrorHandler("Email is not valid.", 400);
		}
		const checkExist = await query("SELECT * FROM user WHERE email = ?", [
			this.email,
		]);
		if (checkExist.length > 0) {
			throw new ErrorHandler("Email is already in use.", 400);
		}
		try {
			this.password = await bcrypt.hash(this.password, 10);
			const res = await query(
				"INSERT INTO user (username, email, password) VALUES (?, ?, ?)",
				[this.username, this.email, this.password],
			);

			return (
				await query("SELECT * FROM user WHERE id = ? ", [res.insertId])
			)[0];
		} catch (err) {
			console.log(err);
		}
	}

	static async findByEmail(email) {
		const sql = "SELECT * FROM user WHERE email = ?";
		const params = [email];
		const res = connection.query(sql, params);
		// if (res.length > 0) {
		// 	return new User(res[0]);
		// } else return null;
		return res;
	}

	static async findByUserName(username) {
		const sql = "SELECT * FROM user WHERE username = ?";
		const params = [username];
		const res = await connection.query(sql, params);
		// console.log(res.length);
		// if (res.length > 0) {
		// 	return new User(res[0]);
		// } else return null;
		return res;
	}
	static async findById(id) {
		const sql = "SELECT * FROM user WHERE id =?";
		const params = [id];
		const res = await query(sql, params);
		if (res.length > 0) {
			return new User(res[0]);
		} else throw new ErrorHandler("User not found", 400);
	}
	static async count() {
		const sql = "SELECT count(*) AS total FROM user ";
		return (await query(sql, []))[0].total;
	}
	static async find({
		take = 10,
		skip = 0,
		orderBy = ["id", "desc"],
		keyword = "",
	}) {
		const search = `%${keyword.trim().replace(/ +/g, "%")}%`;
		console.log(">>>search: ", search);
		const sql = `SELECT * FROM user
					WHERE (username LIKE ?)
					ORDER BY ${orderBy[0]} ${orderBy[1]} 
					LIMIT ? OFFSET ? 
				
					`;
		const params = [search, take, skip];
		const res = await query(sql, params);

		return res;
	}

	async remove() {
		const sql = "DELETE FROM user WHERE id =?";
		const params = [this.id];
		await query(sql, params);
		return this;
	}

	async comparePassword(password) {
		return await bcrypt.compare(password, this.password);
	}

}

module.exports = User;
