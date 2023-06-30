const express = require("express");

const router = express.Router();

const {
	register,
	loginUser,
	deleteUser,
	updateUser,
	
} = require("../controllers/user");

router.post("/signup", register);
router.post("/signin", loginUser);
router.post("/delete_user", deleteUser);
router.post("/update_user", updateUser);

module.exports = router;