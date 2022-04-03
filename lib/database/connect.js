const dotenv = require("dotenv").config();
const mysql = require("mysql");

const date = new Date();

// Create connection into database
const connection = mysql.createConnection(
  "mysql://pedro:19ls1esipedro@localhost:3306/sliderx"
);

// Connect to database
connection.connect(function (err) {
  if (err) {
    console.error(`${date.toLocaleDateString()} - ${err.stack}`);
    return;
  }

  console.log(
    `${date.toLocaleString()} - Connected to database with id: ${
      connection.threadId
    }`
  );
});

module.exports = connection;
