const connect = require("../database/connect");

function getData(req, res) {
  const sql = "SELECT * FROM image";

  connect
    .performQuery(sql, [])
    .then((results) => {
      res.status(200).json(results);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
}

module.exports = getData;
