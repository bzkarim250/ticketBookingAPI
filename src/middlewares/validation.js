/* eslint-disable consistent-return */
import out from '../helpers/response';

const validate = (schema) => (req, res, next) => {
  const { error } = schema.validate(req.body);
  return error ? out(res, 422, error.message, null, 'VALIDATION_ERROR') : next();
};

export default validate;
