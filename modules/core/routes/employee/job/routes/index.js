const router = require("express").Router();
const controller = require("../controller");

const validator = require("../validator");

const { asyncHandler } = require("utils/lib");

router.route("/").get(validator.getJobs, asyncHandler(controller.getJobs));

router.route("/suggested-jobs").get(asyncHandler(controller.getSuggestedJobs));

module.exports = router;
