const Joi = require("joi");

const signup = Joi.object({
  user: Joi.object({
    username: Joi.string().min(5).max(50).required(),
    password: Joi.string()
      .pattern(new RegExp("^(?=.*?[A-Za-z])(?=.*?[0-9]).{8,32}$"))
      .required(),
    phoneNumber: Joi.string().pattern(new RegExp("^(09)\\d{9}$")).required(),
  }).required(),
  company: Joi.object({
    companyName: Joi.string().min(2).max(50).required(),
    foundedAt: Joi.number().integer().min(1100).max(1400).required(),
    address: Joi.string().min(4).max(500).required(),
    phone: Joi.string().pattern(/^\d+$/).min(2).max(20).required(),
    fieldOfWork: Joi.string()
      .valid("f_1", "f_2", "f_3", "f_4", "f_5") // TODO: FROM LIST
      .required(),
  }).required(),
});

const login = Joi.object({
  username: Joi.string().min(5).max(50).required(),
  password: Joi.string()
    .pattern(new RegExp("^(?=.*?[A-Za-z])(?=.*?[0-9]).{8,32}$"))
    .required(),
});

module.exports = {
  signup,
  login,
};
