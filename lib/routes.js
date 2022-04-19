const express = require("express");
const uploadImage = require("../lib/utils/uploadImage");
const isAuthenticated = require("./middleware/isAuthenticated");

const router = express.Router();

// Import controllers
const uploadData = require("./controllers/upload");
const getData = require("./controllers/getData");
const deleteData = require("./controllers/delete");
const updateData = require("./controllers/update");

// Import pages
const index = require("./pages");
const admin = require("./pages/admin");
const dashboard = require("./pages/dashboard");
const dashboardView = require("./pages/dashboardView");
const dashboardUpload = require("./pages/dashboardUpload");
const dashboardEdit = require("./pages/dashboardEdit");
const dashboardGallery = require("./pages/dashboardGallery");

const admLoggin = require("./controllers/admLoggin");

// Upload router. Using multer middleware to upload images and store them in the database
router.post("/api/upload", uploadImage.single("file"), uploadData);

// View image router.
router.get("/api/images", getData);
router.get("/api/image/:id", dashboardView);

// Delete router. The middleware remove the image from the database and the file system
router.delete("/api/delete/:id", deleteData);

// Edit router. Multer middleware is needed to upload the new image
router.put("/api/update/:id", uploadImage.single("file"), updateData);
router.get("/api/image/:id/edit", dashboardEdit);

// Home page
router.get("/", index);

router.post("/api/login", admLoggin);
// Admin page
router.get("/admin", admin);
router.get("/admin/dashboard", isAuthenticated, dashboard);
router.get("/admin/dashboard/upload", isAuthenticated, dashboardUpload);
router.get("/admin/dashboard/gallery", isAuthenticated, dashboardGallery);

// Sign out router
router.get("/api/signout", (req, res) => {
  req.session.destroy(() => {
    res.redirect("/");
  });
});

module.exports = router;
