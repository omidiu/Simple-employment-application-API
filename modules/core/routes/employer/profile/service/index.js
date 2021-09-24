const bcrypt = require("bcrypt");
const Error = require("../errors");
const errors = new Error();

const service = (genericService, { CompanyRepo }, {}) => ({
  ...genericService(CompanyRepo),
  editUserCompany: async (userId, companyInput) => {
    await CompanyRepo.updateUserCompany(userId, companyInput);
  },
});

module.exports = service;
