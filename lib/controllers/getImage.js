const connect = require("../database/connect");

function getImage(req, res) {
  const id = req.params.id;
  const sql = `SELECT * FROM image WHERE id = ${id}`;

  connect
    .performQuery(sql, [])
    .then((results) => {
      res.status(200).json(results);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
}

module.exports = getImage;
