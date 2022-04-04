const express = require("express");
const uploadImage = require("../lib/utils/uploadImage");
const router = express.Router();

const app = express();

// Import routes
const uploadData = require("./controllers/upload");
const getData = require("./controllers/getData");
const deleteData = require("./controllers/delete");
const updateController = require("./controllers/update");
const admLogginController = require("./controllers/admLoggin");
const indexPage = require("./controllers/indexPage");

// CRUD routes
router.post("/api/upload", uploadImage.single("file"), uploadData);
router.get("/api/images", getData);
router.delete("/api/delete/:id", deleteData);
router.put("/api/update/:id", uploadImage.single("file"), updateController);

// Pages routes
app.use("/admin", admLogginController);
router.get("/", indexPage);

module.exports = router;
