const express = require("express");
const app = express();
var http = require('http'),
    fs = require('fs');

const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: null,
    database: 'travelling'
});

connection.connect((error) => {
    if (error) {
    console.log('Error connecting to MySQL database!', error);
    } else {
    console.log('Connected to MySQL database!');
    }
});

const bodyParser = require('body-parser');
const { compileFunction } = require("vm");

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.get("/signup", (req, res) => {
    fs.readFile('./register.html',function (err, data){
        res.writeHead(200, {'Content-Type': 'text/html','Content-Length':data.length});
        res.write(data);
        res.end();
    });
})

app.post("/signup", function(req, res) {
    const { username, email, password1 } = req.body;
  
    const sql = "INSERT INTO user (username, email, password) VALUES (?, ?, ?)";
    connection.query(sql, [username, email, password1], function(err, result) {
      if (err) throw err;
      console.log("User registered!");
      res.send("User registered!");
    });
});

app.post("/signin", function(req, res) {
    const { email, password } = req.body;
  
    const sql = "SELECT COUNT(*) FROM user WHERE email = ? AND password = ?";
    connection.query(sql, [ email, password], function(err, result) {
      if (err) throw err;
      const num = result[0]['COUNT(*)'];
      if (num==1) res.send("ACCEPT");
      else res.send("ERROR");
      console.log(num);
    });
});

app.get("/find_hotel", function(req, res) {
    fs.readFile('find_hotel.html',function (err, data){
        console.log(err);  // add this line to debug error 
        console.log(data); // add this line to debug data
        res.writeHead(200, {'Content-Type': 'text/html','Content-Length':data.length});
        res.write(data);
        res.end();
    });
});

app.post("/find_hotel", function(req, res) {
    const { city, checkin, checkout, adults, children, duty } = req.body;

    // find_hotel?page=...&limit=...
    const page = req.query.page || 1;
    const limit = req.query.limit || 10;

    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    console.log(checkin);
    const sql = `
        select hotel.id, hotel.room_id, hotel.rating, hotel.name, room.adults, room.children
        from hotel
        join room on room.id = hotel.room_id
        join city on city.id = hotel.city_id
        where (
            city.name like ? and
            adults >= ? and
            children >= ? and
            hotel.room_id not in (
                select room_id
                from service
                where (
                    (? BETWEEN checkin AND checkout) OR
                    (? BETWEEN checkin AND checkout)
                )
            )
        )
        order by hotel.rating desc
    `;
    connection.query(sql, [`%${city}%`, adults, children, checkin.replace("T", " "), checkout.replace("T", " ")], function(err, result) {
        if (err) throw err;
        // To do: if success, redirect to the list of hotel url
        hotelList = [];
        result.forEach((row) => {
            hotelList.push({
                hotel_id: row.id,
                room_id: row.room_id,
                rating_hotel: row.rating,
                hotel_name: row.name,
                number_of_adults: row.adults,
                number_of_children: row.children
            });
        });
        const resultHotel = hotelList.slice(startIndex, endIndex);
        console.log(resultHotel);
        res.json(resultHotel);
      });

})

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Application listen on port ${PORT}!`))