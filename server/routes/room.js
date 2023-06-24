const express = require("express");

const router = express.Router();

const {
	getSingleRoom
} = require("../controllers/room");

router.get("/room", getSingleRoom);

module.exports = router;