const Joi = require("joi");
Joi.objectId = require("joi-objectid")(Joi);

const createJob = Joi.object({
  jobTitle: Joi.string().min(2).max(50).required(),
  jobDescription: Joi.string().min(2).max(5000).required(),
  city: Joi.string().min(2).max(40).required(), // TODO: enum values
  industry: Joi.string().valid("i_1", "i_2", "i_3", "i_4").required(), // TODO: change later (s: skills)
  salary: Joi.number().integer().min(1).max(100).required(), // Consider as million
  workingHours: Joi.object({
    from: Joi.number().integer().min(0).max(24).required(),
    to: Joi.number()
      .integer()
      .min(0)
      .max(24)
      .greater(Joi.ref("from"))
      .required(),
  }),
  imageFile: Joi.objectId().required(),
  requireSkills: Joi.array()
    .items(
      Joi.string().valid("s1", "s2", "s3", "s4", "s5") // TODO: change later (s: skills)
    )
    .min(1)
    .required()
    .unique((a, b) => a === b),
});

const editJob = Joi.object({
  jobTitle: Joi.string().min(2).max(50),
  jobDescription: Joi.string().min(2).max(5000),
  city: Joi.string().min(2).max(40).required(), // TODO: enum values
  industry: Joi.string().valid("i_1", "i_2", "i_3", "i_4"), // TODO: change later (i: industries)
  salary: Joi.number().integer().min(1).max(100), //  Consider as million
  workingHours: Joi.object({
    from: Joi.number().integer().min(0).max(24),
    to: Joi.number().integer().min(0).max(24).greater(Joi.ref("from")),
  }),
  imageFile: Joi.objectId(),
  requireSkills: Joi.array()
    .items(
      Joi.string().valid("s1", "s2", "s3", "s4", "s5") // TODO: change later (s: skills)
    )
    .min(1)
    .unique((a, b) => a === b),
});

module.exports = {
  createJob,
  editJob,
};
