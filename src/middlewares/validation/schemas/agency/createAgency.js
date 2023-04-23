import Joi from 'joi';

export default Joi.object({
  name: Joi.string().min(3).required().error(new Error('Your company name must be valid and contains atleast 3 characters long')),
  email: Joi.string().email().required().error(new Error('Email must be a valid email')),
  address: Joi.string().required().error(new Error('Address must be valid')),
  phone: Joi.string().min(10).required().error(new Error('Phone number must be valid')),
  website: Joi.string().uri().error(new Error('Website must be a valid URL'))

});
