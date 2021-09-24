const Error = require("../errors");
const errors = new Error();

const { employeeProfileService: service } = require(global.servicesAddress);

exports.editResume = async (req, res, next) => {
  const { body: resumeInput } = req;
  const { _id: userId } = req.user;
  await service.editResume(userId, resumeInput);
  res.success({}, 201);
};
