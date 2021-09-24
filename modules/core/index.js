const router = require("express").Router();
const {
  expressResponsehandler,
  expressErrorHandler,
  roleBaseJWT,
} = require("./middlewares");

const authRoutes = require("./routes/auth");
const employeeRoutes = require("./routes/employee");
const employerRoutes = require("./routes/employer");

router.use(expressResponsehandler);
router.use("/auth", authRoutes);
router.use("/employee", roleBaseJWT(["employee"]), employeeRoutes);
router.use("/employer", roleBaseJWT(["employer"]), employerRoutes);
router.use(expressErrorHandler);

module.exports = router;
