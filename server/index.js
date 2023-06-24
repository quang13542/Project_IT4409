const express = require("express");
const app = express();

const mysql = require('mysql');

const bodyParser = require('body-parser');
const { compileFunction } = require("vm");

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.send("Hello World!");
});

const authRoute = require("./routes/auth");
const hotelRoute = require("./routes/hotel");
const serviceRoute = require("./routes/service");
app.use("/api/v1", authRoute);
app.use("/api/v1", hotelRoute);
app.use("/api/v1", serviceRoute);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Application listen on port ${PORT}!`))