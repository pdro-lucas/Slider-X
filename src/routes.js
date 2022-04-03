const express = require("express");

const app = express();

// Import routes
const uploadRouter = require("./controllers/uploadController");
const getImageController = require("./controllers/getImageController");
const deleteController = require("./controllers/deleteController");
const updateController = require("./controllers/updateController");
const admLogginController = require("./controllers/admLogginController");
const admPageController = require("./controllers/admPageController");

// CRUD routes
app.use("/api", uploadRouter);
app.use("/api", getImageController);
app.use("/api", deleteController);
app.use("/api", updateController);

// Admin Routes
app.use("/admin", admLogginController);
app.use("/admin", admPageController);

module.exports = app;
