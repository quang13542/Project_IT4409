const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Quang301',
    database: 'travelling'
});

connection.connect((error) => {
    if (error) {
    console.log('Error connecting to MySQL database!', error);
    } else {
    console.log('Connected to MySQL database!');
    }
});

async function query(sql, params) {
	console.log(sql.green, params || "");
	try {
		const [row] = await dbconnection.execute(sql, params);
		return row;
	} catch (error) {
		console.log(error);
		throw error;
	}

	// const connection = await mysql.createConnection({
	// 	...connectInfo,
	// 	namedPlaceholders: true,
	// });
	// await connection.connect();

	// console.log("\nconnection established\n".green);
	// try {
	// 	const [rows] = await connection.execute(sql, params);
	// 	return rows;
	// } catch (err) {
	// 	console.log(err);
	// 	throw err;
	// } finally {
	// 	await connection.end();
	// }
}

module.exports = {
	query,
};