const db = require("../database/connect");

function admin(req, res) {
  // get data to render in the index view
  const sql = "SELECT * FROM image";
  db.query(sql, function (error, results) {
    if (error) throw error;
    if (results.length === 0) {
      res.send("No data found");
      return;
    }

    res.render("Dashboard", {
      title: "<title>SliderX - Admin Page</title>",
      results,
    });
  });
}

module.exports = admin;
