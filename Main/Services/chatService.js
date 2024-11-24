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
}

module.exports = new ChatService();
