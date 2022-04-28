const connect = require("../database/connect");

function gallery(req, res) {
  // get data to render in the index view
  const sql = "SELECT * FROM image";
  connect.performQuery(sql).then((results) => {
    if (results.length === 0) {
      res.render("index", {
        title: "<title>SliderX - No data found</title>",
        component: "404",
        pageName: "Gallery",
        results: { message: "No data found" },
      });
    } else {
      res.render("index", {
        title: "<title>SliderX - Gallery</title>",
        component: "gallery",
        pageName: "Gallery",
        results,
      });
    }
  });
}

module.exports = gallery;
