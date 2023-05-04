import express from 'express';
import userRoute from './userRoute';
import busRoute from './busRoute';
import agencyRoute from './agencyRoute';
import ticketRoute from './ticketRoute';
import tripRoute from './tripRoute';

const route = express.Router();

route.use('/user', userRoute);
route.use('/bus', busRoute);
route.use('/agency', agencyRoute);
route.use('/ticket', ticketRoute);
route.use('/trip', tripRoute);

export default route;
