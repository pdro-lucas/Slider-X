const connect = require("../database/connect");

function uploadData(req, res) {
  let { title, tag, description, priority, transitionTime, active, showInfo } =
    req.body;

  const fileName = req.file.key;
  const fileLocation = req.file.location || `/images/${req.file.key}`;

  // The default value of active is 1. When checkbox is not checked, the value is "false"
  // The database only accepts 1 or 0. So, if the value is "false", set the value is 0
  if (!active) active = 0;
  if (!showInfo) showInfo = 0;
  if (!transitionTime) transitionTime = 0;

  const data = [
    title,
    tag,
    description,
    priority,
    transitionTime,
    fileName,
    fileLocation,
    active,
    showInfo,
  ];

  const sql = `INSERT INTO image (title, tag, description, priority, transition_time, image_name, image_location, active, show_info) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`;
  connect
    .performQuery(sql, data)
    .then((results) => {
      res.status(200).json(results);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
}

module.exports = uploadData;
