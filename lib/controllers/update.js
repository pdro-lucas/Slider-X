const db = require("../database/connect");
const deleteImage = require("../utils/deleteImage");

const date = new Date();

function saveFileInDatabase(oldImageName, oldImageLocation, req, res) {
  let { title, tag, description, active } = req.body;

  let fileLocation = oldImageLocation;
  let fileName;

  // Check if file was uploaded. If yes, get the file name, if not, keep the old file name
  if (req.file) {
    fileName = req.file.key;
    fileLocation = req.file.location;

    const log = `[${date.toLocaleTimeString("pt-BR")}]: File uploaded`;
    console.log(log, { file: req.file });
    // TODO: delete old image here
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

    const log = `[${date.toLocaleTimeString("pt-BR")}]: Image ${
      req.params.id
    } was updated`;
    console.log(log);
      res.status(200).json(results);
    }
  );
}

function updateData(req, res) {
  const sql = `SELECT image_name, image_location FROM image WHERE id = ${req.params.id}`;
  db.query(sql, function (error, results) {
    if (error) throw error;
    const oldImageName = results[0].image_name;
    const oldImageLocation = results[0].image_location;

    saveFileInDatabase(oldImageName, oldImageLocation, req, res);
  });
}

module.exports = updateData;
