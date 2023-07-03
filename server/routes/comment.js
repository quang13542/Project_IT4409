const express = require("express");

const router = express.Router();

const { getRoomComment } = require("../controllers/comment");

router.get("/get_room_comment", getRoomComment);

module.exports = router;