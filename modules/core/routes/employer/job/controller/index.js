const Error = require("../errors");
const errors = new Error();

const { employerJobService: service } = require(global.servicesAddress);

exports.createJob = async (req, res, next) => {
  const { body: jobInput } = req;
  const { _id: userId } = req.user;
  await service.createJob(userId, jobInput);
  res.success({}, 201);
};

exports.getUserJob = async (req, res, next) => {
  const { jobId } = req.params;
  const { _id: userId } = req.user;
  const userJob = await service.getUserJob(jobId, userId);
  res.success({ userJob }, 201);
};

exports.editUserJob = async (req, res, next) => {
  const { body: jobInput } = req;
  const { jobId } = req.params;
  const { _id: userId } = req.user;
  await service.editUserJob(jobId, userId, jobInput);
  res.success({}, 201);
};
