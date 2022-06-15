function isAuthenticated(req, res, next) {
  if (req.session.loggedIn) {
    next();
  } else {
    res.status(401).redirect("/admin");
  }
}

module.exports = isAuthenticated;
