const Joi = require("joi");
Joi.objectId = require("joi-objectid")(Joi);

const getJobs = Joi.object({
  search: Joi.string().min(2).max(50).required(),
  minSalary: Joi.number().integer().min(1).max(100).required(),
  maxSalary: Joi.number()
    .integer()
    .min(1)
    .max(100)
    .greater(Joi.ref("minSalary"))
    .required(),
});

module.exports = {
  getJobs,
};
