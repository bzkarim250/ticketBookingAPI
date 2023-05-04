import output from '../helpers/response';
import { verify } from '../helpers/jwt';
import Agency from '../database/models/agency';

export const isAdmin = async (req, res, next) => {
  try {
    const authHeader = req.header('Authorization');
    if (!authHeader) throw new Error('You don\'t have access to do that action');
    const token = authHeader.replace('Bearer ', '');
    const user = verify(token);
    if (user.role !== 'admin') {
      return output(res, 403, 'You don\'t have access to do that action', null, 'FORBIDDEN');
    }
    req.token = token;
    req.user = user;
    return next();
  } catch (error) {
    return output(res, 401, error.message || error, null, 'AUTHENTICATION_ERROR');
  }
};
export const isUser = async (req, res, next) => {
  try {
    const authHeader = req.header('Authorization');
    if (!authHeader) throw new Error('You don\'t have access to do that action');
    const token = req.header('Authorization').replace('Bearer ', '');
    const user = verify(token);
    if (user.role !== 'user') {
      return output(res, 403, 'You don\'t have access to do that action', null, 'FORBIDDEN');
    }
    req.token = token;
    req.user = user;
    return next();
  } catch (error) {
    return output(res, 401, error.message || error, null, 'AUTHENTICATION_ERROR');
  }
};
export const isAgencyOrAdmin = async (req, res, next) => {
  try {
    const authHeader = req.header('Authorization');
    if (!authHeader) throw new Error('You don\'t have access to do that action');
    const token = authHeader.replace('Bearer ', '');
    const user = verify(token);
    if (user.role !== 'admin' && user.role !== 'agency') {
      return output(res, 403, 'You don\'t have access to do that action', null, 'FORBIDDEN');
    }
    req.token = token;
    req.user = user;
    const agency = await Agency.findOne({ companyAdmin: user.id });
    if (!agency) {
      return output(res, 403, 'You are not associated with any agency', null, 'FORBIDDEN');
    }
    req.agencyId = agency._id;
    return next();
  } catch (error) {
    return output(res, 401, error.message || error, null, 'AUTHENTICATION_ERROR');
  }
};

export const isAllowed = async (req, res, next) => {
  try {
    const authHeader = req.header('Authorization');
    if (!authHeader) throw new Error('You don\'t have access to do that action');
    const token = authHeader.replace('Bearer ', '');
    const user = verify(token);
    if (user.role !== 'agency') {
      return output(res, 403, 'You don\'t have access to do that action', null, 'FORBIDDEN');
    }
    const agency = await Agency.findOne({ companyAdmin: user.id });
    if (!agency) {
      return output(res, 403, 'You are not associated with any agency', null, 'FORBIDDEN');
    }
    req.agencyId = agency._id;
    return next();
  } catch (error) {
    return output(res, 401, error.message || error, null, 'AUTHENTICATION_ERROR');
  }
};
