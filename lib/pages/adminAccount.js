function adminPage(req, res) {
  res.render("adminAccountPage", { title: "<title>Admin Account</title>" });
}

module.exports = adminPage;
