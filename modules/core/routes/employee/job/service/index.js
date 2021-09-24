const bcrypt = require("bcrypt");
const Error = require("../errors");
const errors = new Error();

const { jobsInRange } = require("utils/algorithms");

const service = (
  genericService,
  { JobPostRepo, ResumeRepo, ApplyRepo },
  {}
) => ({
  ...genericService(JobPostRepo),
  ...genericService(ResumeRepo),
  ...genericService(ApplyRepo),
  getSuggestedJobs: async (userId) => {
    const { skills, city } = await ResumeRepo.findUserResume(userId);
    const userResume = await ResumeRepo.findUserResume(userId);
    const userApplies = await ApplyRepo.findUserApplies(userResume._id);

    const ignoreIds = userApplies.map((apply) => apply.jobId);
    const skillsRegex = skills.map((skill) => new RegExp(skill, "i"));

    const suggestedJobs = await JobPostRepo.suggestBaseInfo(
      skillsRegex,
      city,
      ignoreIds
    );

    return suggestedJobs;
  },
  getJobs: async (query) => {
    const { search, minSalary, maxSalary } = query;
    const searchReg = new RegExp(search, "i");
    const jobs = await JobPostRepo.findJobsBaseOnSearch(searchReg);

    return jobsInRange(jobs, minSalary, maxSalary);
  },
});

module.exports = service;
