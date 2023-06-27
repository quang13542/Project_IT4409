const express = require("express");

const router = express.Router();

const { findMostRoomCity } = require("../controllers/city");

router.get("/find_most_room_city", findMostRoomCity);

module.exports = router;