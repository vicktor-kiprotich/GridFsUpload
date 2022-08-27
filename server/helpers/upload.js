const multer = require("multer");

const storage = multer.diskStorage({
  filename: (req, file, cb) => cb(null, file.filename),
});

module.exports = muler({ storage: storage });
