const { bodySchemas, paramSchemas, querySchemas } = require("../schemas");
const Error = require("../errors");
const errors = new Error();

const validator = {};

const schemaValidator = (schema, data) => {
  const resultValidation = schema.validate(data);
  if (resultValidation.error) errors.inputIsNotValid(resultValidation.error);
  data = resultValidation.value;
};

validator.editCompany = (req, res, next) => {
  schemaValidator(bodySchemas.editCompany, req.body);
  next();
};

module.exports = validator;
