const multer = require("multer");
const path = require("path");
const crypto = require("crypto");

const pathToSaveImage = path.resolve(__dirname, "..", "..", "public", "images");
const fileSizeToMegaBytes = 2 * 1024 * 1024; // 2MB

const upload = multer({
  storage: multer.diskStorage({
    destination: pathToSaveImage,
    filename: (req, file, cb) => {
      // Generate a 16-bit hash to set the file name as a unique identifier
      crypto.randomBytes(16, (err, hash) => {
        if (err) cb(err);
        // get extension name of the file and set the file name with a 16-bit hash
        const filename = `${hash.toString("hex")}${path.extname(
          file.originalname
        )}`;

        cb(null, filename);
      });
    },
  }),
  limits: {
    fileSize: fileSizeToMegaBytes,
  },
  fileFilter: (req, file, cb) => {
    // Accept only following image mimetypes
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
});

module.exports = upload;
