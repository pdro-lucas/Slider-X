const isAuthenticated = require("../middleware/isAuthenticated");
const router = require("express").Router();
const page = require("../pages/");

/* Home page */
router.get("/", page.carouselPage);

/* Admin login page */
router.get("/admin", page.admLoginPage);

/* Admin page */
router.get("/admin/account", isAuthenticated, page.adminAccountPage);

/* Admin Dashboard router */
router.get("/admin/dashboard", isAuthenticated, page.dashboardPage);

// Dashboard upload form page
router.get(
  "/admin/dashboard/upload",
  isAuthenticated,
  page.dashboardUploadPage
);

// Dashboard edit form page
router.get(
  "/admin/dashboard/:id/edit",
  isAuthenticated,
  page.dashboardEditPage
);

// Dashboard Gallery router
router.get(
  "/admin/dashboard/gallery",
  isAuthenticated,
  page.dashboardGalleryPage
);

/* View image router. */
router.get("/admin/image/:id", isAuthenticated, page.dashboardViewPage);

module.exports = router;
