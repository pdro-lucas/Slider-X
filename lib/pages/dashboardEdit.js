const db = require("../database/connect");

function editImage(req, res) {
  // get data to render in the editImage view
  const sql = "SELECT * FROM image WHERE id = ?";
  const params = req.params.id;
  db.query(sql, params, function (error, results) {
    if (error) throw error;

    res.render("dashboard", {
      title: `<title>SliderX - ${results[0].title}</title>`,
      id: req.params.id,
      component: "editImage",
      dashboard_title: "Edit Image",
      dashboard_location: "Edit Image",
      results,
    });
  });
}

module.exports = editImage;
