import express from 'express';
import TicketController from '../controllers/ticketController';
import { isUser } from '../middlewares/authentication';

const ticketRoute = express.Router();

ticketRoute.post('/create', isUser, TicketController.createTicket);
export default ticketRoute;
