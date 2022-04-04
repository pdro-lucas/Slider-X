function AdminUpload(req, res) {
  res.render("uploadForm", { title: "<title>SliderX - Upload Image</title>" });
}

module.exports = AdminUpload;
