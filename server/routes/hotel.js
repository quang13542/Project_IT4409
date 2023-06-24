const express = require("express");

const router = express.Router();

const {
	filterHotel
} = require("../controllers/hotel");

router.get("/find_hotel", filterHotel);

module.exports = router;