const express = require("express");
const route = express.Router();
const instituteModel = require("../models/instituteModel");
const { sendResponse } = require("../Helper/helper");

route.get("/", async (req, res) => {
  try {
    const result = await instituteModel.find();
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
  let { instituteName, address, shortName, tel, } = req.body;
  try {
    let errArr = [];
    if (!instituteName) {
      errArr.push("Required : Institute Name");
    }
    if (!shortName) {
      errArr.push("Required :  Short Name");
    }
    if (!address) {
        errArr.push("Required : address");
      }
    if (!course) {
      errArr.push("Required : tel");
    }
    if (errArr.length > 0) {
      res
        .send(sendResponse(false, errArr, null, "Required All Fields"))
        .status(400);
      return;
    } else {
      let obj = {  instituteName,  address, shortName, tel, };
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