const router = require("express").Router();

// Admin test user
const username = "Pedro";
const password = "19ls1esi";

router.get(
  "/login",
  function (req, res, next) {
    if (req.session.loggedIn) {
      console.log(req.session);
      return res.send("/admin");
    }
    next();
  },
  function (req, res) {
    res.render("form", { layout: "main", template: "home-template" });
  }
);

router.post(
  "/login",
  function (req, res, next) {
    if (req.body.username == username && req.body.password == password) {
      res.locals.username = req.body.username;
      next();
    } else {
      res.status(401).send("Not authenticated");
    }
  },
  (req, res) => {
    req.session.loggedIn = true;
    req.session.username = res.locals.username;
    // console.log(req.session);
    res.send("/admin");
  }
);

module.exports = router;
