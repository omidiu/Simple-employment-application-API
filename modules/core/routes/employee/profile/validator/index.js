const { bodySchemas, paramSchemas, querySchemas } = require("../schemas");
const Error = require("../errors");
const errors = new Error();

const validator = {};

const schemaValidator = (schema, data) => {
  const resultValidation = schema.validate(data);
  if (resultValidation.error) errors.inputIsNotValid(resultValidation.error);
  data = resultValidation.value;
};

validator.editResume = (req, res, next) => {
  schemaValidator(bodySchemas.editResume, req.body);
  next();
};

module.exports = validator;
