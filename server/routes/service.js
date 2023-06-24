const express = require("express");

const router = express.Router();

const {
	createService, rateService
} = require("../controllers/service");

router.post("/register_room", createService);
router.post("/rate_service", rateService);

module.exports = router;