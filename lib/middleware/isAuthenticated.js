function isAuthenticated(req, res, next) {
  if (req.session.loggedIn) {
    next();
  } else {
    res.status(401).render("components/404");
  }
}

module.exports = isAuthenticated;
