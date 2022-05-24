// import and export all controllers in this folder
const getData = require("./getData");
const getImage = require("./getImage");
const uploadData = require("./upload");
const deleteData = require("./delete");
const updateData = require("./update");
const admLogin = require("./admLogin");

module.exports = {
  getData,
  getImage,
  uploadData,
  deleteData,
  updateData,
  admLogin,
};
