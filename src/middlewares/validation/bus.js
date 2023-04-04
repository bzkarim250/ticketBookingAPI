/* eslint-disable import/prefer-default-export */
import validator from '../../helpers/validator';
import createBusSchema from './schemas/bus/createBus';

export const createBusValidation = (req, res, next) => {
  validator(createBusSchema, req.body, res, next);
};
