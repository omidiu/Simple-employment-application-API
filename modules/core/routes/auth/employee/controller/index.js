const Error = require("../errors");
const errors = new Error();

const { employeeAuthService: service } = require(global.servicesAddress);

exports.signup = async (req, res, next) => {
  const { user: userInput, resume: resumeInput } = req.body;
  const token = await service.register(userInput, resumeInput);
  res.success({ token }, 201);
};

exports.login = async (req, res, next) => {
  const { body: loginInput } = req;
  const token = await service.login(loginInput);
  res.success({ token }, 201);
};
