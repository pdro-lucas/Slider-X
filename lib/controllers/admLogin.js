const connect = require("../database/connect");

function login(req, res) {
  // get username and password from database
  const sql = `SELECT username, password FROM user WHERE username = ?`;
  const username = req.body.username;
  const args = [username];

  connect.performQuery(sql, args).then((result) => {
    // compare user data
    if (
      result.length === 0 ||
      req.body.username !== result[0].username ||
      result[0].password !== req.body.password
    ) {
      return res.status(401).json({
        status: 401,
        message: "Não autorizado",
      });
    }
    // set session
    req.session.loggedIn = true;
    req.session.username = req.body.username;
    res.status(200).json({
      status: 200,
      message: "authorized",
    });
  });
}

module.exports = login;
