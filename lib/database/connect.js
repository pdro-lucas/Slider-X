const dotenv = require("dotenv").config();
const mysql = require("mysql");

const date = new Date();

// Create pool connection into database
const connection = mysql.createPool(process.env.DATABASE_URI);

connection.on("acquire", function (connection) {
  console.log(
    `[${date.toLocaleTimeString("pt-BR")}]: Connection %d acquired`,
    connection.threadId
  );
});
console.log(`[${date.toLocaleTimeString("pt-BR")}]: Connected to database`);

module.exports = connection;
