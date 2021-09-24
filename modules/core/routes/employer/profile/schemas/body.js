const Joi = require("joi");
Joi.objectId = require("joi-objectid")(Joi);

const editCompany = Joi.object({
  companyName: Joi.string().min(2).max(50),
  foundedAt: Joi.number().integer().min(1100).max(1400),
  address: Joi.string().min(4).max(500),
  phone: Joi.string().pattern(/^\d+$/).min(2).max(20),
  fieldOfWork: Joi.string().valid("f_1", "f_2", "f_3", "f_4", "f_5"), // TODO: FROM LIST
});

module.exports = {
  editCompany,
};
