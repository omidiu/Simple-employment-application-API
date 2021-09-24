const bcrypt = require("bcrypt");
const Error = require("../errors");
const errors = new Error();

const service = (genericService, { JobPostRepo, CompanyRepo }, {}) => ({
  ...genericService(JobPostRepo),
  createJob: async (userId, jobInput) => {
    const companyOfUser = await CompanyRepo.findUserCompany(userId);

    jobInput.companyId = companyOfUser._id;

    await JobPostRepo.create(jobInput);
  },
  getUserJob: async (jobId, userId) => {
    const companyOfUser = await CompanyRepo.findUserCompany(userId);
    const userJob = await JobPostRepo.findCompanyJob(jobId, companyOfUser._id);
    if (!userJob) errors.notFoundError();

    return userJob;
  },
  editUserJob: async (jobId, userId, jobInput) => {
    const companyOfUser = await CompanyRepo.findUserCompany(userId);
    const job = await JobPostRepo.findById(jobId);

    if (!job || !job.companyId.equals(companyOfUser._id))
      errors.notFoundError();

    await JobPostRepo.updateById(jobId, jobInput);
  },
});

module.exports = service;
