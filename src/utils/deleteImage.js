const fs = require("fs");
const path = require("path");

// Get image name to delete image
function deleteImage(imageName) {
  const imagePath = path.resolve(__dirname, `../../public/images/${imageName}`);
  // Delete image
  fs.unlink(imagePath, function (error) {
    if (error) return console.log(error);
    console.log(`Image ${imageName} deleted successfully!`);
  });
}

module.exports = deleteImage;
