const router = require("express").Router();
const db = require("../database/connect");

router.get("/images", (req, res) => {
  const row = "SELECT * FROM image";
  db.query(row, function (error, results, fields) {
    if (error) throw error;

    if (results.length === 0) {
      res
        .status(404)
        .json({ status: { message: "Data base is empty", code: 404 } });
      return;
    }
    console.log(req.session);
    res.json(results);
  });
});

module.exports = router;
