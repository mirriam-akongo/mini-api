const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect(process.env.DB_CON_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
//   .then(() => {
//     console.log("Successfully connected to the database");
//   })
//   .catch((error) => console.log("FAILURE: ", error));

const db = mongoose.connection;

module.exports = db;
