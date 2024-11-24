class Message {
  constructor(senderId, receiverId, text, groupId, imageUrl, replyTo, reactions) {
    this.senderId = senderId;
    this.receiverId = receiverId || null; // For 1:1 chats
    this.text = text || null;
    this.groupId = groupId || null; // For group chats
    this.imageUrl = imageUrl || null; // Optional
    this.replyTo = replyTo || null; // Optional reply-to message ID
    this.reactions = reactions || {}; // Emoji reactions
    this.timestamp = new Date().toISOString();
  }
}

module.exports = Message;
