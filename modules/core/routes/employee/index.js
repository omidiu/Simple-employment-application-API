const router = require("express").Router();
const profileRoutes = require("./profile/routes");
const applyRoutes = require("./apply/routes");
const jobRoutes = require("./job/routes");

router.use("/profile", profileRoutes);
router.use("/applies", applyRoutes);
router.use("/jobs", jobRoutes);

module.exports = router;
