const connect = require("../database/connect");
const deleteImage = require("../utils/deleteImage");
const aws = require("aws-sdk");

const date = new Date();

const deleteImageFrom = (imageName) => {
  // check if user is using local or s3 storage and delete image from local or s3
  if (process.env.STORAGE_TYPE === "local") {
    deleteImage(imageName);
  } else {
    const s3 = new aws.S3();
    const params = {
      Bucket: process.env.BUCKET_NAME,
      Key: imageName,
    };
    s3.deleteObject(params, (err, data) => {
      if (err) console.log(err);
      console.log(
        `[${date.toLocaleTimeString("pt-BR")}]: Deleted ${imageName} from S3`
      );
    });
  }
};

function deleteData(req, res) {
  // get old image name from database to delete it from local or s3
  const sqlImageName = `SELECT image_name FROM image WHERE id = ${req.params.id}`;

  connect.performQuery(sqlImageName, []).then((results) => {
    const oldImageName = results[0].image_name;
    deleteImageFrom(oldImageName);
  });

  // Delete image from database
  const sql = `DELETE FROM image WHERE id = ${req.params.id}`;
  connect
    .performQuery(sql, [])
    .then((results) => {
      res.status(200).json(results);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
}

module.exports = deleteData;
