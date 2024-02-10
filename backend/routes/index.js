var express = require("express");
var router = express.Router();

var userRoute = require("./users");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.use("/users", userRoute);

module.exports = router;
