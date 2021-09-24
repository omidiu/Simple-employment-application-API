const bcrypt = require("bcrypt");

const hashPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(password, salt);
};

const passIsCorrect = (input, pass) => {
  return bcrypt.compare(input, pass);
};

module.exports = { hashPassword, passIsCorrect };
