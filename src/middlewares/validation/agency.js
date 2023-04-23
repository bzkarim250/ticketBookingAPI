/* eslint-disable import/prefer-default-export */
import validator from '../../helpers/validator';
import createAgency from './schemas/agency/createAgency';

export const createAgencyValidation = (req, res, next) => validator(createAgency, req.body, res, next);
