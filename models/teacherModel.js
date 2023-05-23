const mongoose = require("mongoose");

const teacherSchema = new mongoose.Schema({
  teacherName: {
    type: String,
    required: true,
  },
  courseName:{
    type: String,
    required: true,
  },
  contact:{
    type: String,
    required: true,

  },
});

const teacherModel = mongoose.model("teacher", teacherSchema);

module.exports = teacherModel;