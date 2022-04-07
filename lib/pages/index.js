const db = require("../database/connect");

function index(req, res) {
  // get data to render in the index view
  const sql = "SELECT * FROM image";
  db.query(sql, function (error, results) {
    if (error) throw error;
    if (results.length === 0) {
      res.send("No data found");
      return;
    }

    res.render("index", {
      title: "<title>SliderX - Home Page</title>",
      results,
    });
  });
}

module.exports = index;
