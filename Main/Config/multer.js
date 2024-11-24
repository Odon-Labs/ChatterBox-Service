const multer = require("multer");

const storage = multer.memoryStorage(); // Store file in memory before uploading
const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit
  fileFilter: (req, file, cb) => {
    const fileTypes = /jpeg|jpg|png/;
    const mimetype = fileTypes.test(file.mimetype);

    if (mimetype) {
      cb(null, true);
    } else {
      cb(new Error("Only .jpeg, .jpg, and .png files are allowed"), false);
    }
  },
});

module.exports = upload;
