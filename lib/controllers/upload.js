const db = require("../database/connect");

function uploadData(req, res) {
  // get data from form send by client and save in data variable
  // to be used in the next query
  let { title, tag, description, active } = req.body;
  console.log(req.file);
  const fileName = req.file.key;
  const fileLocation = req.file.location || `/images/${req.file.key}`;

  // The default value of active is 1. When checkbox is not checked, the value is "false"
  // The database only accepts 1 or 0. So, if the value is "false", set the value is 0
  if (!active) active = 0;

  const sql = `INSERT INTO image (title, tag, description, image_name, image_location, active) VALUES (?, ?, ?, ?, ?, ?)`;
  db.query(
    sql,
    [title, tag, description, fileName, fileLocation, active],
    (error, results) => {
      if (error) throw error;
      res.status(200).json(results);
    }
  );
}

module.exports = uploadData;
