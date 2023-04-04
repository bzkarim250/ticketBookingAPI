import Joi from 'joi';

const passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$/;

export default Joi.object({
  account: Joi.string().min(4).required().error(new Error('Username or email must be valid')),
  password: Joi.string().min(8).pattern(passwordRegex).required()
    .error(new Error('Password must be at least 8 characters long ,one uppercase letter,lowercase letter,number, and one special character.')),
});
