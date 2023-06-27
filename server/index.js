const express = require("express");
const app = express();
const cors = require("cors");
const mysql = require('mysql');

const bodyParser = require('body-parser');
// const { compileFunction } = require("vm");

app.use(express.json());
app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(cors());
app.get("/", (req, res) => {
    res.send("Hello World!");
});

const authRoute = require("./routes/auth");
const hotelRoute = require("./routes/hotel");
const serviceRoute = require("./routes/service");
const roomRoute = require("./routes/room");
const cityRoute = require("./routes/city");
app.use("/api/v1", authRoute);
app.use("/api/v1", hotelRoute);
app.use("/api/v1", serviceRoute);
app.use("/api/v1", roomRoute);
app.use("/api/v1", cityRoute);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Application listen on port ${PORT}!`))