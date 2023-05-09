import express from 'express';
import TicketController from '../controllers/ticketController';
import { isUser } from '../middlewares/authentication';
import * as Validation from '../middlewares/validation/ticket';

const ticketRoute = express.Router();

ticketRoute.post('/create', Validation.createTicketValidation, isUser, TicketController.createTicket);
export default ticketRoute;
