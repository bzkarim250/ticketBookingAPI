/* eslint-disable import/no-extraneous-dependencies */
import Joi from 'joi';

const passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$/;
class UserValidation {
  static signupSchema = Joi.object({
    fullName: Joi.string()
      .min(4)
      .required(),
    username: Joi.string()
      .min(4)
      .required(),
    phone: Joi.string()
      .min(10),
    email: Joi.string()
      .email()
      .required(),
    password: Joi.string()
      .min(8)
      .pattern(passwordRegex)
      .required(),
  });

  static loginSchema = Joi.object({
    account: Joi.string()
      .min(4)
      .required(),
    password: Joi.string()
      .min(8)
      .pattern(passwordRegex)
      .required(),
  });
}

export default UserValidation;
