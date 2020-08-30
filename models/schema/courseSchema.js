const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const courseSchema = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
  courseName: {
    type: String,
    required: "Required",
  },
  courseId: {
    type: String,
    required: "Required",
  },
  courseDuration: {
    type: String,
    required: "Required",
  },
  courseFee: {
    type: String,
    required: "Required",
  },
});

module.exports = courseSchema;
