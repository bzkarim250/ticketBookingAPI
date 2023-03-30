/* eslint-disable consistent-return */
const validate = (schema) => (req, res, next) => {
  const { error } = schema.validate(req.body);
  if (error) {
    const errorMsg = error.details[0].message.split('"');
    return res.status(422).json({
      error: errorMsg[1] + errorMsg[2],
    });
  }
  next();
};

export default validate;
