const { db } = require("../main/config/firebase");

class MessageRepository {
  async saveMessage(message) {
    const messageRef = db.collection("messages").doc();
    await messageRef.set(message);
    return messageRef.id;
  }

  async getMessagesByGroup(groupId) {
    const messages = [];
    const snapshot = await db
      .collection("messages")
      .where("groupId", "==", groupId)
      .orderBy("timestamp", "asc")
      .get();

    snapshot.forEach((doc) => messages.push({ id: doc.id, ...doc.data() }));
    return messages;
  }
}

module.exports = new MessageRepository();
