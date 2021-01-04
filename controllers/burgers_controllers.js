const express = require("express");
const burgers = require("../models/burger");
const router = express.Router();

const burger = require("../models/burger");

// Create all our routes and set up logic within those routes where required.
router.get("/index", (req, res) => {
  burger.findAll((data) => {
    let hbsObject = {
      burgers: data,
    };
    res.render("index", hbsObject);
  });
});

module.exports = router;
