const db = require("../database/connect");
const deleteImage = require("../utils/deleteImage");

function updateData(req, res) {
  // get data from form send by client and save in data variable
  // to be used in the next query
  const data = [
    req.query.title,
    req.query.tag,
    req.query.description,
    req.file.filename,
    req.query.active,
  ];

  // get old image name from database to delete it before update
  const imageName = `SELECT image_name FROM image WHERE id = ${req.params.id}`;
  db.query(imageName, function (error, results) {
    if (error) throw error;
    deleteImage(results[0].image_name);
  });

  const sql = `UPDATE image SET title=?, tag=?, description=?, image_name=?, active=? WHERE id = ${req.params.id}`;

  db.query(sql, data, function (error, results) {
    if (error) throw error;
    res.status(200).json(results);
  });
}

module.exports = updateData;
