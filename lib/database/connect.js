const dotenv = require("dotenv").config();
const mysql = require("mysql");

const date = new Date();

// Create pool connection into database
const pool = mysql.createPool({
  connectionLimit: 20,
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

/**
 *
 * @param {string} sql SQL query to be executed
 * @param {Array.<string>} args Array of arguments to be passed into the query
 * @returns Promise object
 */
const performQuery = (sql, args) => {
  return new Promise((resolve, reject) => {
    pool.getConnection((err, connection) => {
      if (err) {
        reject(err);
        return;
      }
      connection.query(sql, args, (err, rows) => {
        if (err) {
          reject(err);
          return;
        }
        resolve(rows);
        connection.release();
      });
    });
  });
};

console.log(`[${date.toLocaleTimeString("pt-BR")}]: Connected to database`);

module.exports = { pool, performQuery };
