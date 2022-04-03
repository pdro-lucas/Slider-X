function isAuthenticated(req, res, next) {
  if (req.session.loggedIn) {
    next();
  } else {
    res.status(401).send("Not unauthorized");
  }
}

module.exports = isAuthenticated;
