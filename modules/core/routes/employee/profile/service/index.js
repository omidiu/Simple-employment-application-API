const bcrypt = require("bcrypt");
const Error = require("../errors");
const errors = new Error();

const service = (genericService, { ResumeRepo }, {}) => ({
  ...genericService(ResumeRepo),
  editResume: async (userId, resumeInput) => {
    console.log(ResumeRepo);

    await ResumeRepo.updateUserResume(userId, resumeInput);
  },
});

module.exports = service;
