/* eslint-disable import/prefer-default-export */
import validator from '../../helpers/validator';
import createTicket from './schemas/ticket/createTicket';

export const createTicketValidation = (req, res, next) => validator(createTicket, req.body, res, next);
