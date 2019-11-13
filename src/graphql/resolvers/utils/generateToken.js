import jwt from 'jsonwebtoken';
import config from '../../../config';

const ENV_VAR = config.get(process.env.NODE_ENV);

const generateToken = (user) => jwt.sign(
  {
    id: user.id,
    username: user.username,
    roles: user.roles,
  },
  ENV_VAR.APP_SECRET,
  { expiresIn: '1h' },
);

// eslint-disable-next-line import/prefer-default-export
export { generateToken };
