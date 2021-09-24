const bcrypt = require("bcrypt");
const Error = require("../errors");
const errors = new Error();

const { createJWTToken, hashPassword, passIsCorrect } = require("utils/lib");

const service = (genericService, { UserRepo, ResumeRepo }, {}) => ({
  ...genericService(UserRepo),
  ...genericService(ResumeRepo),
  register: async (userInput, resumeInput) => {
    const DupUser = await UserRepo.findByUsernameOrPhone(
      userInput.username,
      userInput.phoneNumber
    );

    if (DupUser) {
      if (DupUser.username === userInput.username) errors.duplicateUsername();
      else errors.duplicatePhoneNumber();
    }

    userInput.role = "employee";
    userInput.password = await hashPassword(userInput.password);

    // TODO: use transaction
    // Create user -> create resume
    const user = await UserRepo.create(userInput);

    resumeInput.userId = user._id;

    await ResumeRepo.create(resumeInput);

    const token = createJWTToken(user._id, "employee");

    return token;
  },
  login: async (loginInput) => {
    const user = await UserRepo.findByUsername(loginInput.username);

    if (
      !user ||
      user.role !== "employee" ||
      !(await passIsCorrect(loginInput.password, user.password))
    )
      errors.invalidUsernameOrpass();

    const token = createJWTToken(user._id, "employee");

    return token;
  },
});

module.exports = service;
