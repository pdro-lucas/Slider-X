const dotenv = require("dotenv").config();
const mysql = require("mysql");

// Create connection into database
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
});

connection.connect(function (err) {
  if (err) {
    if (err.code === "ECONNREFUSED") {
      console.log("Não foi possivel conectar ao banco de dados!");
      return;
    } else if (err.code === "ER_NO_SUCH_TABLE") {
      console.log("A tabela não existe");
      return;
    } else {
      console.error("error connecting: " + err.code);
      return;
    }
  }

  console.log("connected in database as id: " + connection.threadId);
});

module.exports = connection;
