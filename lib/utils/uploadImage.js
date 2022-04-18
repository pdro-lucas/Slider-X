const multer = require("multer");
const path = require("path");
const crypto = require("crypto");
const aws = require("aws-sdk");
const multerS3 = require("multer-s3");

const pathToSaveImage = path.resolve(__dirname, "..", "..", "public", "images");
const fileSizeToMegaBytes = 2 * 1024 * 1024; // 2MB

// set storage types
const storageTypes = {
  local: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, pathToSaveImage);
    },

    filename: (req, file, cb) => {
      crypto.randomBytes(16, (err, hash) => {
        if (err) cb(err);

        // get extension of file and add it to the hash
        file.key = `${hash.toString("hex")}-${path.extname(file.originalname)}`;
        file.location = `/images/${file.key}`;

        cb(null, file.key);
      });
    },
  }),
  s3: multerS3({
    s3: new aws.S3(),
    bucket: process.env.BUCKET_NAME,
    contentType: multerS3.AUTO_CONTENT_TYPE,
    acl: "public-read",
    key: (req, file, cb) => {
      crypto.randomBytes(16, (err, hash) => {
        if (err) cb(err);

        // get extension of file and add it to the hash
        const fileName = `${hash.toString("hex")}${path.extname(
          file.originalname
        )}`;

        console.log(fileName);
        cb(null, fileName);
      });
    },
  }),
};

const upload = multer({
  dest: pathToSaveImage,
  storage: storageTypes[process.env.STORAGE_TYPE],
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
