const ChatService = require("../services/chatService");

class ChatController {
  async sendMessage(req, res) {
    const { senderId, receiverId, groupId, message } = req.body;
    const file = req.file; // Image file from request
    let imageUrl = null;

    try {
      if (file) {
        imageUrl = await ChatService.uploadImage(file);
      }

      const result = await ChatService.sendMessage(senderId, receiverId, groupId, message, imageUrl);
      res.status(201).json(result);
    } catch (error) {
      res.status(500).json({ error: "Failed to send message" });
    }
  }
}

module.exports = new ChatController();
