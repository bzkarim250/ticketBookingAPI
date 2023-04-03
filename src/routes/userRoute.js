import express from 'express';
import userController from '../controllers/userController';
import UserValidation from '../validation/userSchema';
import validate from '../middlewares/validation';

const userRoute = express.Router();

userRoute.post('/signup', validate(UserValidation.signupSchema), userController.signUp);
userRoute.get('/all', userController.getAllUsers);
userRoute.get('/:id', userController.getUserById);
userRoute.post('/login', validate(UserValidation.loginSchema), userController.login);

export default userRoute;
