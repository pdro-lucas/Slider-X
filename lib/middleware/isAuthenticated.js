function isAuthenticated(req, res, next) {
  if (req.session.loggedIn) {
    next();
  } else {
    res.status(401).send(`
    <h1>401 Unauthorized</h1>
    <p>You must be logged in to view this page.</p>
    <p><a href="/admin/login">Login</a></p>
    `);
  }
}

module.exports = isAuthenticated;
