const Joi = require("joi");
Joi.objectId = require("joi-objectid")(Joi);

const getJob = Joi.object({
  jobId: Joi.objectId().required(),
});

const editJob = Joi.object({
  jobId: Joi.objectId().required(),
});

module.exports = {
  getJob,
  editJob,
};
