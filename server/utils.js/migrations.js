const colors = require("colors");
const { query } = require("../db/database");

function createUser(opt) {
	const sql = `CREATE TABLE user (
        id int NOT NULL AUTO_INCREMENT,
        username varchar(50) NOT NULL,
        password varchar(50) NOT NULL,
        email varchar(100) NOT NULL,
        PRIMARY KEY (id)
        );
    `;
	const sqlDown = "DROP TABLE IF EXISTS user";
	if (opt === true) {
		query(sql);
		setTimeout(() => createCity(opt), 2000);
	} else {
		query(sqlDown);
		setTimeout(() => console.log("DELETE success".green), 2000);
	}
}

function createCity(opt) {
	const sql = `CREATE TABLE city (
        id int NOT NULL AUTO_INCREMENT,
        name varchar(50) NOT NULL,
        PRIMARY KEY (id)
      );
      `;
	const sqlDown = "DROP TABLE IF EXISTS city";

	if (opt === true) {
		query(sql);
		setTimeout(() => createRoom(opt), 2000);
	} else {
		query(sqlDown);
		setTimeout(() => createUser(opt), 2000);
	}
}

function createRoom(opt) {
	const sql = `CREATE TABLE room (
        id int NOT NULL AUTO_INCREMENT,
        adults int NOT NULL,
        children int NOT NULL,
        PRIMARY KEY (id)
      );
      `;
	const sqlDown = "DROP TABLE IF EXISTS reviews";

	if (opt === true) {
		query(sql);
		setTimeout(() => createHotel(opt), 2000);
	} else {
		query(sqlDown);
		setTimeout(() => createCity(opt), 2000);
	}
}
function createHotel(opt) {
	const sql = `CREATE TABLE hotel (
        id int NOT NULL AUTO_INCREMENT,
        name varchar(50) DEFAULT NULL,
        city_id int NOT NULL,
        room_id int NOT NULL,
        rating float DEFAULT NULL,
        PRIMARY KEY (id),
        KEY city_id (city_id),
        KEY room_id (room_id),
        CONSTRAINT hotel_ibfk_1 FOREIGN KEY (city_id) REFERENCES city (id) ON DELETE CASCADE,
        CONSTRAINT hotel_ibfk_2 FOREIGN KEY (room_id) REFERENCES room (id) ON DELETE CASCADE
      );
      `;
	const sqlDown = "DROP TABLE IF EXISTS hotel";
	if (opt === true) {
		query(sql);
		setTimeout(() => createService(opt), 2000);
	} else {
		query(sqlDown);
		setTimeout(() => createRoom(opt), 2000);
	}
}

function createService(opt) {
	const sql = `CREATE TABLE service (
        id int NOT NULL AUTO_INCREMENT,
        room_id int NOT NULL,
        checkin datetime DEFAULT NULL,
        checkout datetime DEFAULT NULL,
        rating int DEFAULT NULL,
        nights int NOT NULL,
        duty tinyint(1) DEFAULT NULL,
        user_id int DEFAULT NULL,
        PRIMARY KEY (id),
        KEY room_id (room_id),
        KEY user_id (user_id),
        CONSTRAINT service_ibfk_1 FOREIGN KEY (room_id) REFERENCES room (id) ON DELETE CASCADE,
        CONSTRAINT service_ibfk_2 FOREIGN KEY (user_id) REFERENCES user (id),
        CONSTRAINT checkin_smaller_than_checkout CHECK ((checkin < checkout))
      );
      `;
	const sqlDown = "DROP TABLE IF EXISTS service";

	if (opt === true) {
		query(sql);
		setTimeout(() => console.log("SUCCESSFULLY".green), 1000);
	} else {
		query(sqlDown);
		setTimeout(() => createHotel(opt), 2000)
	}
}

// create tables
createUser(true);

// delete tables
// createService(false);
