const jwt = require("jsonwebtoken");

const { utilsConfig } = require(global.constAddress);

const createJWTToken = (userId, role) => {
  const token = jwt.sign(
    {
      user: {
        _id: userId,
        role: role,
      },
    },
    utilsConfig.JWT_SECRET,
    { expiresIn: utilsConfig.JWT_EXPIRES }
  );

  return token;
};

module.exports = { createJWTToken };
