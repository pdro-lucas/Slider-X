const express = require("express");
const db = require("../database/connect");
const multer = require("multer");
const multerConfig = require("../config/multer");
const isLoggedIn = require("../middleware/isLoggedIn");

const router = express.Router();
const upload = multer(multerConfig).single("file");

router.post(
  "/upload",
  isLoggedIn,
  function (req, res, next) {
    upload(req, res, function (err) {
      if (err) {
        return res.status(400).send({ message: err.message });
      }
      next();
    });
  },
  (req, res) => {
    console.log(req.body);
    if (!req.file) {
      res.status(400).json({ error: "No file upload" });
      return;
    }

    // Get data send by user
    // WARN! Change req.query to req.body
    const data = [
      req.query.title,
      req.query.tag,
      req.query.description,
      req.file.filename,
      req.query.active,
    ];

    // Save all data in database
    const sqlToInsertFileInDb =
      "INSERT INTO image(title, tag, description, image_name, active) VALUES(?)";
    db.query(sqlToInsertFileInDb, [data], (err, result) => {
      if (err) throw err;
      console.log("File Upload ", result);
    });
    res.send(req.file);
  }
);

module.exports = router;
