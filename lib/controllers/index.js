// import and export all controllers in this folder
const getData = require("./getData");
const uploadData = require("./upload");
const deleteData = require("./delete");
const updateData = require("./update");
const admLogin = require("./admLogin");

module.exports = {
  getData,
  uploadData,
  deleteData,
  updateData,
  admLogin,
};
