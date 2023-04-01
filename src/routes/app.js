import express from 'express';
import userRoute from './userRoute';
import busRoute from './busRoute';

const route = express.Router();

route.use('/user', userRoute);
route.use('/bus', busRoute);

export default route;
