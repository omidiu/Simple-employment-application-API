const Error = require("../errors");
const errors = new Error();

const { employeeApplyService: service } = require(global.servicesAddress);

exports.createApply = async (req, res, next) => {
  const { body: applyInput } = req;
  const { _id: userId } = req.user;
  await service.createApply(userId, applyInput);
  res.success({}, 201);
};
