const express = require("express");

const router = express.Router();

const { getRoomComment, addComment } = require("../controllers/comment");

router.get("/get_room_comment", getRoomComment);
router.post("/add_comment", addComment);

module.exports = router;