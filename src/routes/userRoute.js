import express from 'express';
import userController from '../controllers/userController';
import { isAdmin } from '../middlewares/authentication';
import * as Validation from '../middlewares/validation/user';

const userRoute = express.Router();

userRoute.post('/signup', Validation.userSignupValidation, userController.signUp);
userRoute.get('/all', isAdmin, userController.getAllUsers);
userRoute.get('/:id', isAdmin, userController.getUserById);
userRoute.post('/login', Validation.userLoginValidation, userController.login);
userRoute.delete('/delete/:id', isAdmin, userController.deleteUser);

export default userRoute;
