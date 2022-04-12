const db = require("../database/connect");

function admin(req, res) {
  // get data to render in the index view
  const sql = "SELECT * FROM image";
  db.query(sql, function (error, results) {
    if (error) throw error;
    if (results.length === 0) {
      res.render("dashboard", {
        title: "<title>SliderX - No data found</title>",
        component: "404",
        dashboard_title: "Error 404",
        dashboard_location: "Images",
        results: { message: "No data found" },
      });
      return;
    }

    res.render("dashboard", {
      title: "<title>SliderX - Admin Page</title>",
      component: "Table/Table",
      dashboard_title: "Images",
      dashboard_location: "Images",
      results,
    });
  });
}

module.exports = admin;
