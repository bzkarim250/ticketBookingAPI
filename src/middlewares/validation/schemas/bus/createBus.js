import Joi from 'joi';

export default Joi.object({
  plateNo: Joi.string().min(4).required().error(new Error('invalid plate number')),
  seat: Joi.number().min(4).required().error(new Error('seat number must be avalid number')),
});
