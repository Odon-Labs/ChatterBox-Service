const firebaseAdmin = require("firebase-admin");

class AuthController {
  async login(req, res) {
    const { email, password } = req.body;

    try {
      const userRecord = await firebaseAdmin.auth().getUserByEmail(email);
      const token = await firebaseAdmin.auth().createCustomToken(userRecord.uid);
      res.status(200).json({ token });
    } catch (error) {
      res.status(401).json({ error: "Authentication failed" });
    }
  }
}

module.exports = new AuthController();
