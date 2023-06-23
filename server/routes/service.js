const express = require("express");

const router = express.Router();

const {
	createService
} = require("../controllers/service");

router.post("/register_room", createService);

module.exports = router;