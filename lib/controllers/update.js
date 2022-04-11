const db = require("../database/connect");
const deleteImage = require("../utils/deleteImage");

function saveFileInDatabase(oldImageName, req, res) {
  let { title, tag, description, active } = req.body;
  let fileName;

  // Check if file was uploaded. If yes, get the file name, if not, keep the old file name
  if (req.file) {
    fileName = req.file.filename;
    try {
      deleteImage(oldImageName);
    } catch (error) {
      console.log(error);
    }
  } else {
    fileName = oldImageName;
  }

  // The default value of active is 1. When checkbox is not checked, the value is "false"
  // The database only accepts 1 or 0. So, if the value is "false", set the value is 0
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

function updateData(req, res) {
  const sql = `SELECT image_name FROM image WHERE id = ${req.params.id}`;
  db.query(sql, function (error, results) {
    if (error) throw error;
    let oldImageName = results[0].image_name;

    saveFileInDatabase(oldImageName, req, res);
  });
}

module.exports = updateData;
