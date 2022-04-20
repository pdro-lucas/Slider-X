const { default: axios } = require("axios");

function dashboard(req, res) {
  axios.get("http://localhost:5000/api/images").then((response) => {
    res.render("index", {
      title: "<title>SliderX - Admin Dashboard Page</title>",
      component: response.data.length > 0 ? "table/table" : "404",
      pageName: "Dashboard",
      results:
        response.data.length > 0
          ? response.data
          : { message: "No results found" },
    });
  });
}

module.exports = dashboard;
