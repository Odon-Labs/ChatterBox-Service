class Message {
    constructor(senderId, receiverId, text, timestamp, groupId, imageUrl) {
      this.senderId = senderId;
      this.receiverId = receiverId || null; // For direct messages
      this.text = text || null;
      this.timestamp = timestamp;
      this.groupId = groupId || null; // For group messages
      this.imageUrl = imageUrl || null; // Optional image URL
    }
  }
  
  module.exports = Message;
  