import express from 'express';
import userRoute from './userRoute';
import busRoute from './busRoute';
import agencyRoute from './agencyRoute';

const route = express.Router();

route.use('/user', userRoute);
route.use('/bus', busRoute);
route.use('/agency', agencyRoute);

export default route;
