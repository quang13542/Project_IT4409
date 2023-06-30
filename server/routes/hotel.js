const express = require("express");

const router = express.Router();

const {
	filterHotel, getAllHotel
} = require("../controllers/hotel");

router.get("/find_hotel", filterHotel);
router.get("/find_all_hotel", getAllHotel);

module.exports = router;