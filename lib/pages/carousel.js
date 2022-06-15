const connect = require("../database/connect");

function index(req, res) {
  // get data to render in the index view
  const sql = "SELECT * FROM image WHERE active = 1 ORDER BY priority DESC";
  connect.performQuery(sql).then((results) => {
    if (results.length === 0) {
      res.send("No images found");
      return;
    }
    res.render("carousel", {
      title: "<title>SliderX - Home Page</title>",
      results,
    });
  });
}

module.exports = index;
