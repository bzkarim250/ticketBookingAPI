import Joi from 'joi';

class BusValidation {
  static creatbusSchema = Joi.object({
    plateNo: Joi.string()
      .min(4)
      .required(),
    seat: Joi.number()
      .min(4)
      .required(),
    status: Joi.boolean()
      .required(),

  });
}
export default BusValidation;
