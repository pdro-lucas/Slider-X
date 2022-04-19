const db = require("../database/connect");

function gallery(req, res) {
  // get data to render in the index view
  const sql = "SELECT * FROM image";
  db.query(sql, function (error, results) {
    if (error) throw error;
    if (results.length === 0) {
      res.render("index", {
        title: "<title>SliderX - No data found</title>",
        component: "404",
        pageName: "Gallery",
        results: { message: "No data found" },
      });
      return;
    }

    res.render("index", {
      title: "<title>SliderX - Admin Gallery Page</title>",
      component: "gallery",
      pageName: "Gallery",
      results,
    });
  });
}

module.exports = gallery;
