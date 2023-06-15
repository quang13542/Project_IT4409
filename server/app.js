const express = require("express");
const app = express();
var http = require('http'),
    fs = require('fs');

const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
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
    const { city, checkin, checkout, adults, children, rooms, duty } = req.body;

    const sql = `
        select hotel.id, hotel.room_id, hotel.rating
        from hotel
        join room on room.id = hotel.room_id
        join city on city.id = hotel.city_id
        where (
            city.name like '%?%' and
            adults>=? and
            children>=? and
            hotel.room_id not in (
                select room_id
                from service
                where (
                    (? between checkin and checkout) or
                    (? between checkin and checkout)
                )
            )
        )
        order by hotel.rating desc
    `
    connection.query(sql, [city, adults, children, checkin.replace("T", " "), checkout.replace("T", " ")], function(err, result) {
        if (err) throw err;
        // To do: if success, redirect to the list of hotel url
        
      });

})

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Application listen on port ${PORT}!`))