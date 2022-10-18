const router = require("express").Router();
const apiController = require("../controllers/apiController");
const { body } = require("express-validator");
const { upload } = require("../middlewares/multer");

router.get("/landing-page", apiController.landingPage);
router.get("/detail-page/:id", apiController.detailPage);
router.post(
  "/booking-page",
  upload,
  body("itemId").notEmpty(),
  body("duration").notEmpty().isInt(),
  body("bookingStartDate").notEmpty(),
  body("bookingEndDate").notEmpty(),
  body("firstName").notEmpty(),
  body("lastName").notEmpty(),
  body("email").notEmpty().isEmail(),
  body("phoneNumber").notEmpty().isMobilePhone("id-ID"),
  body("accountHolder").notEmpty(),
  body("bankFrom").notEmpty(),
  apiController.bookingPage
);

module.exports = router;
