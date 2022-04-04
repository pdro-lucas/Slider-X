const db = require("../database/connect");

function uploadData(req, res) {
  // get data from form send by client and save in data variable
  // to be used in the next query
  const data = [
    req.query.title,
    req.query.tag,
    req.query.description,
    req.file.filename,
    req.query.active,
  ];

  const sql = `INSERT INTO image (title, tag, description, image_name, active) VALUES (?)`;
  db.query(sql, [data], (error, results) => {
    if (error) throw error;
    res.status(200).json(results);
  });
}

module.exports = uploadData;
