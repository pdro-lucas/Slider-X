const cors = require("cors");
const dotenv = require("dotenv").config();
const express = require("express");
// const morgan = require("morgan");
const path = require("path");
const routes = require("./lib/routes");
const session = require("express-session");

const app = express();

const port = process.env.PORT || 3000;
const oneDay = 1000 * 60 * 60 * 24;

// Static files
app.use(express.static(path.resolve(__dirname, "public")));
app.use(
  "/css",
  express.static(path.join(__dirname, "node_modules/bootstrap/dist/css"))
);
app.use(
  "/js",
  express.static(path.join(__dirname, "node_modules/bootstrap/dist/js"))
);

// View engine setup
app.set("view engine", "ejs");
app.set("views", "./views");

// Configure session
app.use(
  session({
    secret: process.env.SECRET_KEY,
    name: "uniqueSessionID",
    saveUninitialized: false,
    cookie: { maxAge: oneDay },
    resave: false,
  })
);

// App config
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
// app.use(morgan("dev"));

// Routes
app.use(routes);

// Initialize server
app.listen(port, "0.0.0.0", () =>
  console.log(`Server is running at: http://localhost:${port}`)
);
