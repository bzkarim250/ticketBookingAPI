import out from '../helpers/response';
import { verify } from '../helpers/jwt';

export const isAdmin = async (req, res, next) => {
  try {
    const authHeader = req.header('Authorization');
    if (!authHeader) throw new Error('You don\'t have access to do that action');
    const token = authHeader.replace('Bearer ', '');
    const user = verify(token);
    if (user.role !== 'admin') {
      return out(res, 403, 'You don\'t have access to do that action', null, 'FORBIDDEN');
    }
    req.token = token;
    req.user = user;
    return next();
  } catch (error) {
    return out(res, 401, error.message || error, null, 'AUTHENTICATION_ERROR');
  }
};
export const isUser = async (req, res, next) => {
  try {
    const token = req.header('Authorization').replace('Bearer ', '');
    const user = verify(token);
    if (user.role !== 'user') {
      return out(res, 403, 'You don\'t have access to do that action', null, 'FORBIDDEN');
    }
    req.token = token;
    req.user = user;
    return next();
  } catch (error) {
    return out(res, 401, error.message || error, null, 'AUTHENTICATION_ERROR');
  }
};
export const isAgencyOrAdmin = async (req, res, next) => {
  try {
    const authHeader = req.header('Authorization');
    if (!authHeader) throw new Error('You don\'t have access to do that action');
    const token = authHeader.replace('Bearer ', '');
    const user = verify(token);
    if (user.role !== 'admin' && user.role !== 'agency') {
      return out(res, 403, 'You don\'t have access to do that action', null, 'FORBIDDEN');
    }
    req.token = token;
    req.user = user;
    return next();
  } catch (error) {
    return out(res, 401, error.message || error, null, 'AUTHENTICATION_ERROR');
  }
};
