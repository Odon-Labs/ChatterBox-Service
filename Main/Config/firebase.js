const admin = require("firebase-admin");
const serviceAccount = require("../path-to-your-service-account.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: "your-firebase-project-id.appspot.com", // Replace with your Firebase project bucket
});

const bucket = admin.storage().bucket();

module.exports = { admin, bucket };
