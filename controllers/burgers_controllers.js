const express = require("express");
const router = express.Router();
const burger = require("../models/burger");

// Create all our routes and set up logic within those routes where required.
router.get("/", (req, res) => {
  burger.findAll((data) => {
    let hbsObject = {
      burgers: data,
    };
    res.render("index", hbsObject);
  });
});

router.patch("/api/burgers/:id", (req, res) => {
  burger.devour(req.params.id, (result) => {
    if (result.changedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

router.post("/api/burgers", (req, res) => {
  burger.createBurger(req.body.name, (result) => {
    return res.status(201).end();
  });
});

module.exports = router;
