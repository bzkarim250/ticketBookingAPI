import express from 'express';
import AgencyController from '../controllers/agencyController';
import { isAdmin, isAgencyOrAdmin } from '../middlewares/authentication';
import * as Validation from '../middlewares/validation/agency';

const agencyRoute = express.Router();

agencyRoute.post('/create', Validation.createAgencyValidation, isAgencyOrAdmin, AgencyController.createAgency);
agencyRoute.get('/all', isAdmin, AgencyController.getAllAgencies);

export default agencyRoute;
