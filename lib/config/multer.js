const multer = require("multer");
const path = require("path");
const crypto = require("crypto");

const saveFilePath = path.resolve(__dirname, "..", "..", "public", "images");
const fileSizeToMegaBytes = 2 * 1024 * 1024; // 2MB

module.exports = {
  dest: saveFilePath,
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, saveFilePath);
    },
    filename: (req, file, cb) => {
      // Get the file extension and set the filename with a 16-bit hash
      crypto.randomBytes(16, (err, hash) => {
        if (err) cb(err);

        const setFileName = `${hash.toString("hex")}${path.extname(
          file.originalname
        )}`;

        cb(null, setFileName);
      });
    },
  }),
  limits: {
    fileSize: fileSizeToMegaBytes,
  },
  fileFilter: (req, file, cb) => {
    // Accept only image mimetype
    const allowedMimes = [
      "image/jpeg",
      "image/pjpeg",
      "image/png",
      "image/gif",
    ];

    if (allowedMimes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      return cb(new Error("Invalid file type"));
    }
  },
};
