const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  // res.send("New form");
  res.render("form");
});

module.exports = router;
