// const mysql = require("mysql2/promise");
// require("dotenv").config();

const mysql = require('mysql');

const connection = mysql.createConnection({
    host: process.env.HOST || "localhost",
	user: process.env.USER || "root",
	// password: process.env.PASSWORD || "quang1201",
    password:"quang1201",
	database: process.env.DATABASE || "travelling",
});

connection.connect((error) => {
    if (error) {
    console.log('Error connecting to MySQL database!', error);
    } else {
    console.log('Connected to MySQL database!');
    }
});

// const connectInfo = {
// 	host: process.env.HOST || "localhost",
// 	user: process.env.USER || "root",
// 	password: process.env.PASSWORD || "",
// 	database: process.env.DATABASE || "travelling",
// 	// connectionLimit: 10, //mysql connection pool length
// };

// var dbconnection = mysql.createPool(connectInfo);

// // Attempt to catch disconnects
// dbconnection.on("connection", function (connection) {
// 	console.log("DB Connection established");

// 	connection.on("error", function (err) {
// 		console.error(new Date(), "MySQL error", err.code);
// 	});
// 	connection.on("close", function (err) {
// 		console.error(new Date(), "MySQL close", err);
// 	});
// });

// function query(sql, params) {
//     try {
//         const [row] = dbconnection.execute(sql, params);
// 		console.log(row);
// 		return row;
//     } catch (error) {
//         console.log(error);
//         throw error;
//     }
// }

module.exports = {
	connection,
};
