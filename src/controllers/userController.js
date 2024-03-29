/* eslint-disable no-underscore-dangle */
/* eslint-disable max-len */
import { generate, check } from '../helpers/bcrypt';
import { sign } from '../helpers/jwt';
import UserServices from '../database/services/userService';
import output from '../helpers/response';

class UserController {
  static async signUp(req, res) {
    try {
      const { username, email } = req.body;
      const userExist = await UserServices.getSingleUser({ $or: [{ username }, { email }] });
      if (userExist) {
        return output(res, 409, 'username or email is taken', null, 'USER_EXISTS');
      }
      req.body.password = await generate(req.body.password);
      const user = await UserServices.createUser({ ...req.body });
      user.password = undefined;
      const accessToken = sign({
        id: user._id, username: user.username, role: user.role, email: user.email
      });
      user._doc.accessToken = accessToken;
      return output(res, 201, 'Signup succesfully', user);
    } catch (error) {
      return output(res, 500, error.message || error, null, 'SERVER_ERROR');
    }
  }

  static async getAllUsers(req, res) {
    try {
      const users = await UserServices.getAllUsers();
      return output(res, 200, 'all user are displayed', users);
    } catch (error) {
      return output(res, 500, error.message || error, null, 'SERVER_ERROR');
    }
  }

  static async getUserById(req, res) {
    try {
      const user = await UserServices.getUserById(req.params.id);
      if (!user) {
        return output(res, 404, 'User not found', null, 'USER_NOT_FOUND');
      }
      return output(res, 200, 'User Found Successfull', user);
    } catch (error) {
      return output(res, 500, error.message || error, null, 'SERVER_ERROR');
    }
  }

  static async login(req, res) {
    try {
      const { account } = req.body;

      const user = await UserServices.getSingleUser({ $or: [{ username: account }, { email: account }] });
      if (!user) {
        return output(res, 404, 'Username or email not registered', null, 'USER_NOT_FOUND');
      }
      if (!check(user.password, req.body.password)) {
        return output(res, 401, 'Wrong password', null, 'UNAUTHORIZED');
      }
      const accessToken = sign({
        id: user.id, email: user.email, username: user.username, role: user.role
      });
      user.password = undefined;
      user.role = undefined;
      user._doc.accessToken = accessToken;
      return output(res, 200, 'login succesfully', user);
    } catch (error) {
      return output(res, 500, error.message || error, null, 'SERVER_ERROR');
    }
  }

  static async deleteUser(req, res) {
    try {
      const user = await UserServices.getUserById(req.params.id);

      if (!user) {
        return output(res, 404, 'User not found', null, 'USER_NOT_FOUND');
      }

      if (user.role === 'admin' && user.id === req.user.id) {
        return output(res, 403, 'Admins cannot delete their own accounts', null, 'FORBIDDEN');
      }
      if (!(user.role === 'admin' && user.id === req.user.id)) {
        return output(res, 403, 'You can not delete other people\'s account', null, 'FORBIDDEN');
      }
      await UserServices.deleteUser(req.params.id);

      return output(res, 200, 'User Deleted Successful', null);
    } catch (error) {
      return output(res, 500, error.message || error, null, 'SERVER_ERROR');
    }
  }
}

export default UserController;
