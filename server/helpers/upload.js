const multer = require("multer");

const storage = multer.diskStorage({
  filename: (req, file, cb) => cb(null, file.originalname),
  path: (req, file, cb) => cb(null, "uploads/" + file.originalname),
});

module.exports = multer({ storage: storage });
