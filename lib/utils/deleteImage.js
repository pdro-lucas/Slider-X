const fs = require("fs");
const path = require("path");

/*
 * @param {string} imageName
 * @description Delete image from the server
 */
function deleteImage(imageName) {
  const imagePath = path.resolve(__dirname, `../../public/images/${imageName}`);
  fs.unlink(imagePath, function (error) {
    if (error) throw error;
    console.log(`Image ${imageName} deleted successfully!`);
  });
}

module.exports = deleteImage;
