const { db } = require("../main/config/firebase");

class UserRepository {
  async createUser(user) {
    const userRef = db.collection("users").doc(user.id);
    await userRef.set(user);
    return user;
  }

  async findUserByEmail(email) {
    const userSnapshot = await db
      .collection("users")
      .where("email", "==", email)
      .get();

    return userSnapshot.empty ? null : userSnapshot.docs[0].data();
  }
}

module.exports = new UserRepository();
