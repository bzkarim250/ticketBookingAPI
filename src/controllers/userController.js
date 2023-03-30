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
}

export default UserController;
