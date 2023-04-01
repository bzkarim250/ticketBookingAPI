import express from 'express';
import busController from '../controllers/busController';
import busValidation from '../validation/busSchema';
import validate from '../middlewares/validation';

const busRoute = express.Router();

busRoute.post('/create', validate(busValidation.creatbusSchema), busController.createBus);
busRoute.get('/all', busController.getAllBuses);
busRoute.get('/:id', busController.getBusById);

export default busRoute;
