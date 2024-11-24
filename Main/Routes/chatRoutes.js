const express = require("express");
const ChatController = require("../controllers/chatController");
const authMiddleware = require("../main/config/authMiddleware");
const upload = require("../main/config/multer");

const router = express.Router();

// Send a message with optional image upload
router.post("/messages", authMiddleware, upload.single("image"), ChatController.sendMessage);

module.exports = router;
