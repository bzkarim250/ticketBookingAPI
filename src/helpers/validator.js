import output from './response';

export default (schema, toValidate, res, next) => {
  const { error } = schema.validate(toValidate);
  return error ? output(res, 422, error.message, null, 'VALIDATION_ERROR') : next();
};
