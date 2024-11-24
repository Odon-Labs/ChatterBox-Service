// const admin = require("firebase-admin");
// const serviceAccount = require("../path-to-your-service-account.json");

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
//   storageBucket: "your-firebase-project-id.appspot.com", // Replace with your Firebase project bucket
// });

// const bucket = admin.storage().bucket();

// module.exports = { admin, bucket };

const admin = require("firebase-admin");
const serviceAccount = require("../path-to-service-account.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://<your-firebase-project>.firebaseio.com",
  storageBucket: "<your-firebase-project>.appspot.com",
});

const db = admin.firestore();
const bucket = admin.storage().bucket();

module.exports = { db, bucket };
