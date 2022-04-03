const db = require("../database/connect");
const deleteImage = require("../utils/deleteImage");
const isLoggedIn = require("../middleware/isLoggedIn");
const router = require("express").Router();

router.delete("/delete/:id", isLoggedIn, (req, res) => {
  const sqlToGetImageName = `SELECT image_name FROM image WHERE id = ${req.params.id}`;

  db.query(sqlToGetImageName, function (error, [RowDataPacket]) {
    if (error) throw error;

    deleteImage(RowDataPacket.image_name);
  });

  const sqlToDeleteImage = `DELETE FROM image WHERE id = ${req.params.id}`;
  db.query(sqlToDeleteImage, function (error, results, fields) {
    if (error) throw error;

    res.json(results);
  });
});

module.exports = router;
