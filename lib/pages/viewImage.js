const db = require("../database/connect");

function viewImage(req, res) {
  // get data to render in the viewImage view
  const sql = "SELECT * FROM image WHERE id = ?";
  const params = req.params.id;
  db.query(sql, params, function (error, results) {
    if (error) throw error;

    res.render("viewImage", {
      title: `<title>SliderX - ${results[0].title}</title>`,
      results,
    });
  });
}

module.exports = viewImage;
