const repos = require("./repo");
const genericService = require("./genericService");

const employeeAuthService = require("../routes/auth/employee/service")(
  genericService,
  { UserRepo: repos.UserRepo, ResumeRepo: repos.ResumeRepo },
  {}
);

const employerAuthService = require("../routes/auth/employer/service")(
  genericService,
  { UserRepo: repos.UserRepo, CompanyRepo: repos.CompanyRepo },
  {}
);

const employeeProfileService = require("../routes/employee/profile/service")(
  genericService,
  { ResumeRepo: repos.ResumeRepo },
  {}
);

const employerProfileService = require("../routes/employer/profile/service")(
  genericService,
  { CompanyRepo: repos.CompanyRepo },
  {}
);

const employerJobService = require("../routes/employer/job/service")(
  genericService,
  { JobPostRepo: repos.JobPostRepo, CompanyRepo: repos.CompanyRepo },
  {}
);

const employeeApplyService = require("../routes/employee/apply/service")(
  genericService,
  {
    JobPostRepo: repos.JobPostRepo,
    ResumeRepo: repos.ResumeRepo,
    ApplyRepo: repos.ApplyRepo,
  },
  {}
);

const employeeJobService = require("../routes/employee/job/service")(
  genericService,
  {
    JobPostRepo: repos.JobPostRepo,
    ResumeRepo: repos.ResumeRepo,
    ApplyRepo: repos.ApplyRepo,
  },
  {}
);

module.exports = {
  employeeAuthService,
  employerAuthService,
  employeeProfileService,
  employerProfileService,
  employerJobService,
  employeeApplyService,
  employeeJobService,
};
