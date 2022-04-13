// Admin test user
const username = "Pedro";
const password = "19ls1esi";

function login(req, res) {
  if (req.body.username == username && req.body.password == password) {
    res.locals.username = req.body.username;
    req.session.loggedIn = true;
    req.session.username = res.locals.username;
    // console.log(req.session);
    console.log(req.session);
    res.redirect("/admin/dashboard");
  } else {
    res.status(401).send("Not authenticated");
  }
}

module.exports = login;
