const Error = require("../errors");
const errors = new Error();

const { employerProfileService: service } = require(global.servicesAddress);

exports.editUserCompany = async (req, res, next) => {
  const { body: companyInput } = req;
  const { _id: userId } = req.user;
  await service.editUserCompany(userId, companyInput);
  res.success({}, 201);
};
