const router = require("express").Router();
const controller = require("../controller");

const validator = require("../validator");

const { asyncHandler } = require("utils/lib");

router.route("/").post(validator.createJob, asyncHandler(controller.createJob));

router
  .route("/:jobId")
  .get(validator.getJob, asyncHandler(controller.getUserJob))
  .put(validator.editJob, asyncHandler(controller.editUserJob));

module.exports = router;
