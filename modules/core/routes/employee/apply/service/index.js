const bcrypt = require("bcrypt");
const Error = require("../errors");
const errors = new Error();

const service = (
  genericService,
  { JobPostRepo, ResumeRepo, ApplyRepo },
  {}
) => ({
  ...genericService(JobPostRepo),
  ...genericService(ResumeRepo),
  ...genericService(ApplyRepo),
  createApply: async (userId, applyInput) => {
    const { jobId } = applyInput;
    const job = await JobPostRepo.findById(jobId);
    if (!job) errors.notFoundError();

    const userResume = await ResumeRepo.findUserResume(userId);

    const existedApply = await ApplyRepo.findEmployeeApply(
      jobId,
      userResume._id
    );
    if (existedApply) errors.appliedBefore();

    await ApplyRepo.create({
      jobId,
      resumeId: userResume._id,
    });
  },
});

module.exports = service;
