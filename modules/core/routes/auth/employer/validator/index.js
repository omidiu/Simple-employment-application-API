const { bodySchemas, paramSchemas, querySchemas } = require("../schemas");
const Error = require("../errors");
const errors = new Error();

const validator = {};

const schemaValidator = (schema, data) => {
  const resultValidation = schema.validate(data);
  if (resultValidation.error) errors.inputIsNotValid(resultValidation.error);
  data = resultValidation.value;
};

validator.signup = (req, res, next) => {
  schemaValidator(bodySchemas.signup, req.body);
  next();
};

validator.login = (req, res, next) => {
  schemaValidator(bodySchemas.login, req.body);
  next();
};

module.exports = validator;
