const db = require("../database/connect");
const deleteImage = require("../utils/deleteImage");

function updateData(req, res) {
  // get old image name from database to delete it before update
  const imageName = `SELECT image_name FROM image WHERE id = ${req.params.id}`;
  db.query(imageName, function (error, results) {
    if (error) throw error;
    try {
      deleteImage(results[0].image_name);
    } catch (error) {
      console.lof(error);
    }
  });

  // get data from form send by client and save in data variable
  // to be used in the next query
  let { title, tag, description, active } = req.body;
  const fileName = req.file.filename;

  if (!active) active = 0;

  const sql = `UPDATE image SET title=?, tag=?, description=?, image_name=?, active=? WHERE id = ${req.params.id}`;

  db.query(
    sql,
    [title, tag, description, fileName, active],
    function (error, results) {
      if (error) throw error;
      res.status(200).json(results);
    }
  );
}

module.exports = updateData;
