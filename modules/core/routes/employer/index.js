const router = require("express").Router();
const profileRoutes = require("./profile/routes");
const jobRoutes = require("./job/routes");

router.use("/profile", profileRoutes);
router.use("/jobs", jobRoutes);

module.exports = router;
