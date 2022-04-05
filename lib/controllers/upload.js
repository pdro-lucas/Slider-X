const db = require("../database/connect");

function uploadData(req, res) {
  // get data from form send by client and save in data variable
  // to be used in the next query
  let { title, tag, description, active } = req.body;
  const fileName = req.file.filename;

  if (!active) active = 0;

  const sql = `INSERT INTO image (title, tag, description, image_name, active) VALUES (?, ?, ?, ?, ?)`;
  db.query(
    sql,
    [title, tag, description, fileName, active],
    (error, results) => {
      if (error) throw error;
      res.status(200).json(results);
    }
  );
}

module.exports = uploadData;
