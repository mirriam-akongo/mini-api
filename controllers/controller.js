const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const db = require("../config/con");
const Course = require("../models/course");

//get notified if we connected successfully to the database
db.once("open", () => {
  console.log("CONNECTION STATUS: ", "CONNECTION SUCCESSFUL!");
});

// or get notified if a connection error occurs
db.on("error", () => {
  console.log("CONNECTION STATUS: ", "CONNECTION FAILED!");
});

module.exports = {
  Welcome: (req, res) => {
    // res.send("Hello welcome to Mirriam's home page");
    res.render("index", {});
  },

  PostHome: (req, res) => {
    res.send("You can now post on Mirriam's home page");
  },

  GetDetails: (req, res) => {
    res.json({ person: [{ name: "Mirriam" }] });
    res.end();
  },

  PostDetails: (req, res) => {
    console.log(req.body);
    res.json({ person: [{ name: "Mirriam" }] });
    res.end();
  },

  GetList: (req, res) => {
    Course.find()
      .exec()
      .then((docs) => {
        const response = {
          count: docs.length,
          courses: docs,
        };
        console.log(docs);
        res.status(200).json(response);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({
          error: err,
        });
      });
  },
};
