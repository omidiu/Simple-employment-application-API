const router = require("express").Router();
const controller = require("../controller");

const validator = require("../validator");

const { asyncHandler } = require("utils/lib");

router
  .route("/")
  .post(validator.createApply, asyncHandler(controller.createApply));

module.exports = router;
