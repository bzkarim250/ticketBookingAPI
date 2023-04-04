import validator from '../../helpers/validator';
import userSignupSchema from './schemas/user/signup';
import userLoginSchema from './schemas/user/login';

export const userSignupValidation = (req, res, next) => {
  validator(userSignupSchema, req.body, res, next);
};

export const userLoginValidation = (req, res, next) => {
  validator(userLoginSchema, req.body, res, next);
};
