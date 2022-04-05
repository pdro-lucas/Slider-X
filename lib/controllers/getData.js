const db = require("../database/connect");

function getData(req, res) {
  const row = "SELECT * FROM image";
  db.query(row, function (error, results) {
    if (error) throw error;

    if (results.length === 0) {
      res.status(200).json({ message: "Data base is empty" });
      return;
    }
    console.log(req.session);
    res.json(results);
  });
}

module.exports = getData;
