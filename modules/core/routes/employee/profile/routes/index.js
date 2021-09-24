const router = require("express").Router();
const controller = require("../controller");

const validator = require("../validator");

const { asyncHandler } = require("utils/lib");

router
  .route("/resume")
  .put(validator.editResume, asyncHandler(controller.editResume));

module.exports = router;
