const express = require("express");

const router = express.Router();

const {
	getSingleRoom, getAllRoom, addRoom
} = require("../controllers/room");

router.get("/room/:id", getSingleRoom);
router.get("/rooms", getAllRoom);
router.get("/add_room", addRoom);

module.exports = router;