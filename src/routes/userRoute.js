import express from 'express';
import userController from '../controllers/userController';
import UserValidation from '../validation/userSchema';
import validate from '../middlewares/validation';

const userRoute = express.Router();

userRoute.post('/signup', validate(UserValidation.signupSchema), userController.signUp);
userRoute.get('/all', userController.getAllUsers);

export default userRoute;
