const express = require("express");

const router = express.Router();

const {
	register,
	loginUser,
	deleteUser,
	updateUser,
	getAllUser,
	
} = require("../controllers/user");

router.post("/signup", register);
router.post("/signin", loginUser);
router.post("/delete_user", deleteUser);
router.post("/update_user", updateUser);
router.get("/find_all_user", getAllUser);

module.exports = router;