import express from 'express';
import busController from '../controllers/busController';
import * as Validation from '../middlewares/validation/bus';
import { isAdmin } from '../middlewares/authentication';

const busRoute = express.Router();

busRoute.post('/create', isAdmin, Validation.createBusValidation, busController.createBus);
busRoute.get('/all', busController.getAllBuses);
busRoute.get('/:id', busController.getBusById);
busRoute.delete('/delete/:id', isAdmin, busController.deleteBus);

export default busRoute;
