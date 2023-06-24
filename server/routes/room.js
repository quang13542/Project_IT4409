const express = require("express");

const router = express.Router();

const {
	getSingleRoom, getAllRoom
} = require("../controllers/room");

router.get("/room", getSingleRoom);
router.get("/rooms", getAllRoom);

module.exports = router;