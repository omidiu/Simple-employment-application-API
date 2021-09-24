const Joi = require("joi");
Joi.objectId = require("joi-objectid")(Joi);

const createApply = Joi.object({
  jobId: Joi.objectId().required(),
});

module.exports = {
  createApply,
};
