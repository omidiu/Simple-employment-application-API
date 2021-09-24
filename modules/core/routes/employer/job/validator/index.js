const { bodySchemas, paramSchemas, querySchemas } = require("../schemas");
const Error = require("../errors");
const errors = new Error();

const validator = {};

const schemaValidator = (schema, data) => {
  const resultValidation = schema.validate(data);
  if (resultValidation.error) errors.inputIsNotValid(resultValidation.error);
  data = resultValidation.value;
};

validator.createJob = (req, res, next) => {
  schemaValidator(bodySchemas.createJob, req.body);
  next();
};

validator.getJob = (req, res, next) => {
  schemaValidator(paramSchemas.getJob, req.params);
  next();
};

validator.editJob = (req, res, next) => {
  schemaValidator(bodySchemas.editJob, req.body);
  schemaValidator(paramSchemas.editJob, req.params);
  next();
};

module.exports = validator;
