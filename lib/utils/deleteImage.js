const fs = require("fs");
const path = require("path");

/**
 *
 * @param {string} imageName
 * @description get image name to delete it from the server
 */
function deleteImage(imageName) {
  const imagePath = path.resolve(__dirname, `../../public/images/${imageName}`);

  try {
    if (fs.existsSync(imagePath)) {
      fs.unlinkSync(imagePath);
      console.log(`Image ${imageName} deleted successfully!`);
    }
  } catch (err) {
    console.error(err);
  }
}

module.exports = deleteImage;
