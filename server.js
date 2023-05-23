const express = require("express");
const app = express();
const StudentRouter = require("./routes/studentRouter");
const CourseRouter = require("./routes/courseRouter");
const InstituteRouter = require("./routes/instituteRouter");
const TeacherRouter = require("./routes/teacherRouter");
require("dotenv").config();
const mongoose = require("mongoose");
app.use(express.json());

app.use("/api/student", StudentRouter);
app.use("/api/course", CourseRouter);
app.use("/api/institute", InstituteRouter);
app.use("/api/teacher", TeacherRouter);

// app.get("/",(req,res) =>{
//   res.send("Amir bhai jan")
// })

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(
        "Database Connected Successfully and server is listening on this port 5000"
      );
    });
  })
  .catch((err) => {
    console.log(err);
  });