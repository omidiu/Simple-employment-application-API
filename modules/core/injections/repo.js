const models = require("../models");
const genericRepo = require("./genericRepo");

const UserRepo = require("../repos/userRepo")(genericRepo, models.User);
const ResumeRepo = require("../repos/resumeRepo")(genericRepo, models.Resume);
const CompanyRepo = require("../repos/companyRepo")(
  genericRepo,
  models.Company
);
const JobPostRepo = require("../repos/jobPostRepo")(
  genericRepo,
  models.JobPost
);
const ApplyRepo = require("../repos/applyRepo")(genericRepo, models.Apply);

module.exports = {
  UserRepo,
  ResumeRepo,
  CompanyRepo,
  JobPostRepo,
  ApplyRepo,
};
