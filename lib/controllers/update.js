const connect = require("../database/connect");
const deleteImage = require("../utils/deleteImage");
const aws = require("aws-sdk");

const date = new Date();

function saveFileInDatabase(oldImageName, oldImageLocation, req, res) {
  let { title, tag, description, active } = req.body;

  let fileLocation = oldImageLocation;
  let fileName;

  // Check if file was uploaded. If yes, get the file name, if not, keep the old file name
  if (req.file) {
    fileName = req.file.key;
    fileLocation = req.file.location;

    // delete old image from local if STORAGE_TYPE is local
    if (process.env.STORAGE_TYPE === "local") {
      deleteImage(oldImageName);
    } else {
      // delete old image from S3 if STORAGE_TYPE is S3
      const s3 = new aws.S3();
      const params = {
        Bucket: process.env.BUCKET_NAME,
        Key: oldImageName,
      };

      s3.deleteObject(params, (err, data) => {
        if (err) console.log(err);
        console.log(
          `[${date.toLocaleTimeString(
            "pt-BR"
          )}]: Deleted ${oldImageName} from S3`
        );
      });
    }
  } else {
    fileName = oldImageName;
  }

  // The default value of active is 1. When checkbox is not checked, the value is "false"
  // The database only accepts 1 or 0. So, if the value is "false", set the value to 0
  if (!active) active = 0;

  const data = [title, tag, description, fileName, fileLocation, active];

  const sql = `UPDATE image SET title=?, tag=?, description=?, image_name=?, image_location=?, active=? WHERE id = ${req.params.id}`;
  connect.performQuery(sql, data).then((results) => {
    res.status(200).json(results);
  });
  // connect.query(sql, data, function (error, results) {
  //   if (error) throw error;

  //   const log = `[${date.toLocaleTimeString("pt-BR")}]: Image ${
  //     req.params.id
  //   } was updated`;
  //   console.log(log);
  //   res.status(200).json(results);
  // });
}

// Update data in database
function updateData(req, res) {
  const sql = `SELECT image_name, image_location FROM image WHERE id = ${req.params.id}`;
  connect
    .performQuery(sql, [])
    .then((results) => {
      const oldImageName = results[0].image_name;
      const oldImageLocation = results[0].image_location;

      saveFileInDatabase(oldImageName, oldImageLocation, req, res);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
}

// connect.query(sql, function (error, results) {
//   if (error) throw error;
//   const oldImageName = results[0].image_name;
//   const oldImageLocation = results[0].image_location;

//   saveFileInDatabase(oldImageName, oldImageLocation, req, res);
// });

module.exports = updateData;
