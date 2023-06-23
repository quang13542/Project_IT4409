const express = require("express");

const router = express.Router();

const {
	register,
	loginUser,
	
} = require("../controllers/user");

router.post("/signup", register);
router.post("/signin", loginUser);

module.exports = router;