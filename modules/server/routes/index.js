const router = require("express").Router();
const projectRoutes = require("core");

router.use("/", projectRoutes);

module.exports = router;
