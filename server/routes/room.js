const express = require("express");

const router = express.Router();

const {
	getSingleRoom, getAllRoom, addRoom, deleteRoom, updateRoom
} = require("../controllers/room");

router.get("/room/:id", getSingleRoom);
router.get("/rooms", getAllRoom);
router.get("/add_room", addRoom);
router.post("/delete_room", deleteRoom);
router.post("/update_room", updateRoom);

module.exports = router;