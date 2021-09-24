const router = require("express").Router();
const controller = require("../controller");

const validator = require("../validator");

const { asyncHandler } = require("utils/lib");

router
  .route("/company")
  .put(validator.editCompany, asyncHandler(controller.editUserCompany));

module.exports = router;
