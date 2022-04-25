const connect = require("../database/connect");

function editImage(req, res) {
  // get data to render in the editImage view
  const sql = "SELECT * FROM image WHERE id = ?";
  const args = req.params.id;

  connect
    .performQuery(sql, [args])
    .then((results) => {
      res.render("editForm", {
        title: `<title>SliderX - ${results[0].title}</title>`,
        id: args,
        results,
      });
    })
    .catch((error) => {
      res.status(500).json(error);
    });
}

module.exports = editImage;
