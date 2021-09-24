const bcrypt = require("bcrypt");
const Error = require("../errors");
const errors = new Error();

const { createJWTToken, hashPassword, passIsCorrect } = require("utils/lib");

const service = (genericService, { UserRepo, CompanyRepo }, {}) => ({
  ...genericService(UserRepo),
  ...genericService(CompanyRepo),
  register: async (userInput, companyInput) => {
    const DupUser = await UserRepo.findByUsernameOrPhone(
      userInput.username,
      userInput.phoneNumber
    );

    if (DupUser) {
      if (DupUser.username === userInput.username) errors.duplicateUsername();
      else errors.duplicatePhoneNumber();
    }

    userInput.role = "employer";
    userInput.password = await hashPassword(userInput.password);

    // TODO: use transaction
    // Create user -> create company
    const user = await UserRepo.create(userInput);

    companyInput.userId = user._id;

    await CompanyRepo.create(companyInput);

    const token = createJWTToken(user._id, "employer");

    return token;
  },
  login: async (loginInput) => {
    const user = await UserRepo.findByUsername(loginInput.username);

    if (
      !user ||
      user.role !== "employer" ||
      !(await passIsCorrect(loginInput.password, user.password))
    )
      errors.invalidUsernameOrpass();

    const token = createJWTToken(user._id, "employer");

    return token;
  },
});

module.exports = service;
