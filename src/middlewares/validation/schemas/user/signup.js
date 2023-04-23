import Joi from 'joi';

const passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$/;

export default Joi.object({
  fullName: Joi.string().min(4).required().error(new Error('Full name must be at least 4 characters long.')),
  username: Joi.string().min(4).required().error(new Error('Username must be at least 4 characters long')),
  phone: Joi.string().min(10).error(new Error('Phone number must be at least 10 digits long.')),
  email: Joi.string().email().required().error(new Error('Email must be a valid email')),
  password: Joi.string().min(8).pattern(passwordRegex).required()
    .error(new Error('Password must be at least 8 characters long ,one uppercase letter,lowercase letter,number, and one special character.')),
  role: Joi.string().max(8),
});
