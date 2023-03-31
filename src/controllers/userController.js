/* eslint-disable no-underscore-dangle */
/* eslint-disable max-len */
import { generate } from '../helpers/bcrypt';
import { sign } from '../helpers/jwt';
import UserServices from '../service/userService';
import out from '../helpers/response';

class UserController {
  static async signUp(req, res) {
    try {
      const { username, email } = req.body;
      const userExist = await UserServices.getSingleUser({ $or: [{ username }, { email }] });
      if (userExist) {
        return out(res, 409, 'User already exist', null, 'USER_EXISTS');
      }
      req.body.password = await generate(req.body.password);
      const user = await UserServices.createUser({ ...req.body });
      user.password = undefined;
      const accessToken = sign({ id: user._id, username: user.username, role: user.role });
      user._doc.accessToken = accessToken;
      return out(res, 201, 'Signup succesfully', user);
    } catch (error) {
      return out(res, 500, error.message || error, null, 'SERVER_ERROR');
    }
  }

  static async getAllUsers(req, res) {
    try {
      const users = await UserServices.getAllUsers();
      return out(res, 200, 'all user are displayed', users);
    } catch (error) {
      return out(res, 500, error.message || error, null, 'SERVER_ERROR');
    }
  }

  static async getUserById(req, res) {
    try {
      const user = await UserServices.getUserById(req.params.id);
      if (!user) {
        return out(res, 404, 'User not found', null, 'USER_NOT_FOUND');
      }
      return out(res, 200, 'User Found Successfull', user);
    } catch (error) {
      return out(res, 500, error.message || error, null, 'SERVER_ERROR');
    }
  }
}

export default UserController;
