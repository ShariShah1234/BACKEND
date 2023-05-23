const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
    courseName: {
    type: String,
    required: true,
  },
  duration:{
    type: String,
    required: true,

  },
  fees:{
    type: String,
    required: true,

  },
  shortName:{
    type: String,
    required: true,

  },
});

const courseModel = mongoose.model("course", courseSchema);

module.exports = courseModel;