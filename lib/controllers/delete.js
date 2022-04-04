const db = require("../database/connect");
const deleteImage = require("../utils/deleteImage");

function deleteData(req, res) {
  // get old image name from database to delete it
  const imageName = `SELECT image_name FROM image WHERE id = ${req.params.id}`;

  db.query(imageName, function (error, results) {
    if (error) throw error;
    deleteImage(results[0].image_name);
  });

  const sql = `DELETE FROM image WHERE id = ${req.params.id}`;
  db.query(sql, function (error, results) {
    if (error) throw error;
    res.status(200).json(results);
  });
}

module.exports = deleteData;
