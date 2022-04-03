const db = require("../database/connect");
const deleteImage = require("../utils/deleteImage");
const multer = require("multer");
const isLoggedIn = require("../middleware/isLoggedIn");
const multerConfig = require("../config/multer");
const router = require("express").Router();

const upload = multer(multerConfig).single("file");

router.put(
  "/update/:id",
  isLoggedIn,
  // Save file in server public directory
  function (req, res, next) {
    upload(req, res, function (err) {
      if (err) {
        return res.status(400).send({ message: err.message });
      }
      next();
    });
  },
  (req, res) => {
    if (!req.file) {
      res.status(400).json({ error: "No file upload" });
      return;
    }

    // Get data send by user
    const data = [
      req.query.title,
      req.query.tag,
      req.query.description,
      req.file.filename,
      req.query.active,
    ];

    const sqlToGetImageName = `SELECT image_name FROM image WHERE id = ${req.params.id}`;

    db.query(sqlToGetImageName, function (error, [RowDataPacket]) {
      if (error) throw error;

      deleteImage(RowDataPacket.image_name);
    });

    const sqlToUpdateImage = `UPDATE image SET title=?, tag=?, description=?, image_name=?, active=? WHERE id = ${req.params.id}`;

    db.query(sqlToUpdateImage, data, function (error, results, fields) {
      if (error) throw error;
      res.json({
        status: { message: "Update successfully", code: 200 },
        results,
      });
    });
  }
);

module.exports = router;
