const router = require("express").Router();
const isLoggedIn = require("../middleware/isLoggedIn");
const db = require("../database/connect");

router.get("/", function (req, res) {
  const row = "SELECT * FROM image";
  db.query(row, function (error, results, fields) {
    if (error) throw error;

    if (results.length === 0) {
      res
        .status(404)
        .json({ status: { message: "Data base is empty", code: 404 } });
      return;
    }
    // console.log(req.session);
    // console.log(results[0].id);
    res.render("index", { results });
  });
});

module.exports = router;
