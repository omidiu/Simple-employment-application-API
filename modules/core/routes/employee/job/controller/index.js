const Error = require("../errors");
const errors = new Error();

const { employeeJobService: service } = require(global.servicesAddress);

exports.getJobs = async (req, res, next) => {
  const { query } = req;
  const jobs = await service.getJobs(query);
  res.success({ jobs }, 201);
};

exports.getSuggestedJobs = async (req, res, next) => {
  const { _id: userId } = req.user;
  const suggestedJobs = await service.getSuggestedJobs(userId);
  res.success({ suggestedJobs }, 201);
};
