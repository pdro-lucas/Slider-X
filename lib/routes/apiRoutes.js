const router = require("express").Router();

const uploadImage = require("../utils/uploadImage");
const controller = require("../controllers/");

router.post("/api/upload", uploadImage.single("file"), controller.uploadData);

router.get("/api/images", controller.getData);

router.put(
  "/api/update/:id/",
  uploadImage.single("file"),
  controller.updateData
);
router.delete("/api/delete/:id", controller.deleteData);
// Login router
router.post("/api/login", controller.admLogin);

// Sign out router
router.get("/api/signout", (req, res) => {
  req.session.destroy(() => {
    res.redirect("/");
  });
});

module.exports = router;
