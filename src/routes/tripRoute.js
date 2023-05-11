import express from 'express';
import TripController from '../controllers/tripController';
import { isAgencyOrAdmin, isAllowed } from '../middlewares/authentication';

const tripRoute = express.Router();

tripRoute.post('/create', isAllowed, TripController.createTrip);
tripRoute.get('/all', TripController.getAllTrips);
tripRoute.get('/:id', TripController.getTripById);
tripRoute.get('/:agency/all', TripController.getTripsByAgency);
tripRoute.delete('/delete/:id', isAgencyOrAdmin, TripController.deleteTrip);
tripRoute.put('/update/:id', isAgencyOrAdmin, TripController.updateTrip);
export default tripRoute;
