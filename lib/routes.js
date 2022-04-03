const express = require("express");

const app = express();

// Import routes
const uploadRouter = require("./controllers/upload");
const getImageController = require("./controllers/getImage");
const deleteController = require("./controllers/delete");
const updateController = require("./controllers/update");
const admLogginController = require("./controllers/admLoggin");
const admPageController = require("./controllers/admPage");

// CRUD routes
app.use("/api", uploadRouter);
app.use("/api", getImageController);
app.use("/api", deleteController);
app.use("/api", updateController);

// Admin Routes
app.use("/admin", admLogginController);
app.use("/admin", admPageController);

module.exports = app;
