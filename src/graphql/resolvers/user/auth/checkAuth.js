import { AuthenticationError } from 'apollo-server-express';
import jwt from 'jsonwebtoken';
import config from '../../../../config';

const ENV_VAR = config.get(process.env.NODE_ENV);
const { APP_SECRET } = ENV_VAR;

const checkAuth = (context) => {
	const authHeader = context.req.headers.authorization;
	if (authHeader) {
		const token = authHeader.split('Bearer ')[1];
		if (token) {
			try {
				const user = jwt.verify(token, APP_SECRET);
				return user;
			} catch (err) {
				throw new AuthenticationError('Invalid/Expired token');
			}
		}
		throw new Error("Authentication token 'Bearer [Token]");
	}
	throw new Error('Authorization header must be provided');
};

export default checkAuth;
