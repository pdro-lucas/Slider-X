const connect = require("../database/connect");

function viewImage(req, res) {
  // get data to render in the viewImage view
  const sql = "SELECT * FROM image WHERE id = ?";
  const args = req.params.id;
  connect
    .performQuery(sql, [args])
    .then((results) => {
      res.render("viewImage", {
        title: "<title>SliderX - ${results[0].title}</title>",
        results,
      });
    })
    .catch((error) => {
      res.status(500).json(error);
    });
}

module.exports = viewImage;
