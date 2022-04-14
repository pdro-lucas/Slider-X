// Admin test user
const username = "Pedro";
const password = "19ls1esi";

// TODO: Create admin use in database, and fetch username and password.
function login(req, res) {
  if (req.body.username == username && req.body.password == password) {
    res.locals.username = req.body.username;
    req.session.loggedIn = true;
    req.session.username = res.locals.username;

    res.redirect("/admin/dashboard");
  } else {
    res.status(401).send("Not authenticated");
  }
}

module.exports = login;
