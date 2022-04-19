function admin(req, res) {
  if (req.session.loggedIn) {
    res.redirect("/admin/dashboard");
    return;
  }

  res.render("login", { title: "<title>SliderX - Admin Login</title>" });
}

module.exports = admin;
