function AdminUpload(req, res) {
  res.render("dashboard", {
    title: "<title>SliderX - Upload Image</title>",
    component: "uploadForm",
    dashboard_title: "Upload Image",
    dashboard_location: "Upload Image",
    results: "",
  });
}

module.exports = AdminUpload;
