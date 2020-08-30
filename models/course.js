const mongoose = require("mongoose");
const courseSchema = require("./schema/courseSchema");

const Course = mongoose.model("course", courseSchema);

module.exports = Course;
