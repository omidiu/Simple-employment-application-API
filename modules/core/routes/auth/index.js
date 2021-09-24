const router = require("express").Router();
const employeeAuthRoutes = require("./employee/routes");
const employerAuthRoutes = require("./employer/routes");

router.use("/employee", employeeAuthRoutes);
router.use("/employer", employerAuthRoutes);

module.exports = router;
