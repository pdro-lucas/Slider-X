const cors = require("cors");
const dotenv = require("dotenv").config();
const express = require("express");
const path = require("path");
const morgan = require("morgan");
const pageRoutes = require("./lib/routes/pagesRoutes");
const apiRoutes = require("./lib/routes/apiRoutes");
const session = require("express-session");
const MySQLStore = require("express-mysql-session")(session);
const connect = require("./lib/database/connect");

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
const sessionStore = new MySQLStore({ database: "sliderx" }, connect.pool);

app.use(
  session({
    secret: process.env.SECRET_KEY,
    key: "uniqueSessionID",
    store: sessionStore,
    saveUninitialized: false,
    cookie: { maxAge: oneDay },
    resave: false,
  })
);

// App config
app.use(express.json());
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(cors());
app.use(morgan("dev"));

// Routes
app.use(apiRoutes);
app.use(pageRoutes);

app.use((req, res, next) => {
  next({
    status: 404,
    message: "Not found",
  });
});

app.use((err, req, res, next) => {
  if (err.status === 404) {
    return res.status(404).render("components/404", { message: err.message });
  }
});

// Initialize server
app.listen(port, "0.0.0.0", () =>
  console.log(`Server is running at: http://localhost:${port}`)
);
