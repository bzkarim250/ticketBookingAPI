import jwt from 'jsonwebtoken';
import config from './configEnv';

export const sign = (payload) => jwt.sign(payload, config.JWT_SECRETKEY, { expiresIn: '48h' });
export const verify = (payload) => jwt.verify(payload, config.JWT_SECRETKEY);
