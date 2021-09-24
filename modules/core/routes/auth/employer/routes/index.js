const router = require("express").Router();
const controller = require("../controller");

const validator = require("../validator");

const { asyncHandler } = require("utils/lib");

router.route("/signup").post(validator.signup, asyncHandler(controller.signup));
router.route("/login").post(validator.login, asyncHandler(controller.login));

module.exports = router;
