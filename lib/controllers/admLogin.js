const connect = require("../database/connect");

function login(req, res) {
  // get username and password from database
  const sql = `SELECT username, password FROM user WHERE username = ?`;
  const args = [req.body.username];

  connect.performQuery(sql, args).then((result) => {
    if (result.length === 0) {
      res.status(401).send(`
      <h1>401 Unauthorized</h1>
      <p>Invalid username or password.</p>
      <p><a href="/admin/login">Login</a></p>
      `);
    }
    // compare password
    if (result[0].password === req.body.password) {
      // set session
      req.session.loggedIn = true;
      req.session.username = req.body.username;
      res.redirect("/admin/dashboard");
    } else {
      res.status(401).send(`
      <h1>401 Unauthorized</h1>
      <p>Invalid username or password.</p>
      <p><a href="/admin/login">Login</a></p>
      `);
    }
  });
}

module.exports = login;
