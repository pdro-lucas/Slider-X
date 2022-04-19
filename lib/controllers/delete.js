const db = require("../database/connect");
const deleteImage = require("../utils/deleteImage");
const aws = require("aws-sdk");

const date = new Date();

const deleteImageFrom = (imageName) => {
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
};

function deleteData(req, res) {
  // get old image name from database to delete it
  const imageName = `SELECT image_name FROM image WHERE id = ${req.params.id}`;

  db.query(imageName, function (error, results) {
    if (error) throw error;
    // delete image from aws s3
    deleteImageFrom(results[0].image_name);
  });

  const sql = `DELETE FROM image WHERE id = ${req.params.id}`;
  db.query(sql, function (error, results) {
    if (error) throw error;
    res.status(200).json(results);
  });
}

module.exports = deleteData;
