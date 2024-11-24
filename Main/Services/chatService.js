const { bucket } = require("../main/config/firebase");
const MessageRepository = require("../repositories/messageRepository");
const Message = require("../main/models/messageModel");
const { v4: uuidv4 } = require("uuid");

class ChatService {
  async uploadImage(file) {
    const fileName = `${uuidv4()}-${file.originalname}`;
    const blob = bucket.file(fileName);

    const blobStream = blob.createWriteStream({
      metadata: {
        contentType: file.mimetype,
      },
    });

    return new Promise((resolve, reject) => {
      blobStream.on("finish", async () => {
        const publicUrl = `https://storage.googleapis.com/${bucket.name}/${blob.name}`;
        resolve(publicUrl);
      });

      blobStream.on("error", (err) => {
        reject(err);
      });

      blobStream.end(file.buffer);
    });
  }

  async sendMessage(senderId, receiverId, groupId, text, imageUrl) {
    const message = new Message(senderId, receiverId, text, new Date().toISOString(), groupId, imageUrl);
    const messageId = await MessageRepository.saveMessage(message);
    return { id: messageId, ...message };
  }

  async createGroup(req, res) {
    const { name, members, createdBy } = req.body;

    try {
      const group = await ChatService.createGroup(name, members, createdBy);
      res.status(201).json(group);
    } catch (error) {
      res.status(500).json({ error: "Failed to create group" });
    }
  }

  async forwardMessage(req, res) {
    const { senderId, receiverId, messageId } = req.body;

    try {
      const message = await ChatService.forwardMessage(senderId, receiverId, messageId);
      res.status(200).json(message);
    } catch (error) {
      res.status(500).json({ error: "Failed to forward message" });
    }
  }
}

module.exports = new ChatService();
