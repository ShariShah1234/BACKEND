const express = require("express");
const route = express.Router();
const courseModel = require("../models/courseModel");
const { sendResponse } = require("../Helper/helper");

route.get("/", async (req, res) => {
  try {
    const result = await courseModel.find();
    if (!result) {
      res.send(sendResponse(false, null, "No Data Found")).status(404);
    } else {
      res.send(sendResponse(true, result)).status(200);
    }
  } catch (e) {
    console.log(e).send(sendResponse(false)).status(400);
  }
});

//------------------

route.get("/:id", (req, res) => {
  res.send("Get single Student Data");
});

//------------------

route.post("/", async (req, res) => {
  let { courseName,  duration,  fees,shortName} = req.body;
  try {
    let errArr = [];
    if (!courseName) {
      errArr.push("Required : course Name");
    }
    if (!shortName) {
      errArr.push("Required :  short Name");
    }
    if (!duration) {
      errArr.push("Required : duration");
    }
    if (!fees) {
        errArr.push("Required : fees");
      }
    if (errArr.length > 0) {
      res
        .send(sendResponse(false, errArr, null, "Required All Fields"))
        .status(400);
      return;
    } else {
      let obj = {  courseName,  duration, fees, shortName };
      let student = new studentModel(obj);
      await student.save();
      if (!student) {
        res
          .send(sendResponse(false, null, "Internal Server Error"))
          .status(400);
      } else {
        res.send(sendResponse(true, student, "Saved Successfully")).status(200);
      }
    }
  } catch (e) {
    res.send(sendResponse(false, null, "Internal Server Error")).status(400);
  }
});

//------------------

route.put("/:id", (req, res) => {
  res.send("Put single Student Data");
});

//------------------

route.delete("/:id", (req, res) => {
  res.send("Delete single Student Data");
});

module.exports = route;