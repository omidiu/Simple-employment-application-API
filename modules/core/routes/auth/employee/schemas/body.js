const Joi = require("joi");

const signup = Joi.object({
  user: Joi.object({
    username: Joi.string().min(5).max(50).required(),
    password: Joi.string()
      .pattern(new RegExp("^(?=.*?[A-Za-z])(?=.*?[0-9]).{8,32}$"))
      .required(),
    phoneNumber: Joi.string().pattern(new RegExp("^(09)\\d{9}$")).required(),
  }).required(),
  resume: Joi.object({
    firstName: Joi.string().min(2).max(50).required(),
    lastName: Joi.string().min(2).max(50).required(),
    sex: Joi.string().valid("male", "female", "other").required(),
    birthdate: Joi.date().min("2000-01-01").max("2010-01-01").required(),
    city: Joi.string().min(2).max(40).required(), // TODO: use enum values
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
