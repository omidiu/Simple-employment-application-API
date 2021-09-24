const Joi = require("joi");
Joi.objectId = require("joi-objectid")(Joi);

const editResume = Joi.object({
  firstName: Joi.string().min(2).max(50),
  lastName: Joi.string().min(2).max(50),
  sex: Joi.string().valid("male", "female", "other"),
  birthdate: Joi.date().min("2000-01-01").max("2010-01-01"),
  skills: Joi.array()
    .items(
      Joi.string().valid("s1", "s2", "s3", "s4", "s5") // TODO:  (s: skills)
    )
    .unique((a, b) => a === b),
  resumeFile: Joi.objectId(),
  city: Joi.string().min(2).max(40),
});

module.exports = {
  editResume,
};
