const multer = require("multer");
const path = require("path");
const fs = require("fs");

// storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const dir = path.join(__dirname, "../../public/images/boatshow");
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    cb(null, dir);
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname)); // unique filename
  },
});

const fileUpload = multer({ storage }).single("image"); // single image

module.exports = fileUpload;
