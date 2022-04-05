const express = require("express");
const uploadImage = require("../lib/utils/uploadImage");

const router = express.Router();

// Import controllers
const uploadData = require("./controllers/upload");
const getData = require("./controllers/getData");
const viewImage = require("./pages/viewImage");
const deleteData = require("./controllers/delete");
const updateData = require("./controllers/update");
const editImage = require("./pages/editImage");

// Import pages
const index = require("./pages");
const admin = require("./pages/admin");
const AdminUpload = require("./pages/adminUpload");

// Use controllers
router.post("/api/upload", uploadImage.single("file"), uploadData);
router.get("/api/images", getData);
router.get("/api/image/:id", viewImage);
router.delete("/api/delete/:id", deleteData);
router.put("/api/update/:id", uploadImage.single("file"), updateData);
router.get("/api/image/:id/edit", editImage);

// app.use("/admin", admLogginController);

// Use pages
router.get("/", index);

// Use admin pages
router.get("/admin/upload", AdminUpload);
router.get("/admin", admin);

module.exports = router;
