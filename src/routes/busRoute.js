import express from 'express';
import busController from '../controllers/busController';
import * as Validation from '../middlewares/validation/bus';
import { isAgencyOrAdmin, isAllowed } from '../middlewares/authentication';

const busRoute = express.Router();

busRoute.post('/create', isAllowed, Validation.createBusValidation, busController.createBus);
busRoute.get('/all', busController.getAllBuses);
busRoute.get('/:id', busController.getBusById);
busRoute.delete('/delete/:id', isAgencyOrAdmin, busController.deleteBus);

export default busRoute;
