import { AuthenticationError } from 'apollo-server-express';
import User from '../../../../models/user';
import { generateToken } from '../../utils/generateToken';
import authenticateGoogle from '../../utils/passport';

export default {
	Mutation: {
		async authGoogle(
			_,
			{
				input: { accessToken },
			},
			{ req, res },
		) {
			req.body = {
				...req.body,
				access_token: accessToken,
			};
			try {
				// data contains the accessToken, refreshToken and profile from passport
				const { data, info } = await authenticateGoogle(req, res);
				if (data) {
					const user = await User.upsertGoogleUser(data);
					const token = generateToken(data);
					if (user) {
						return {
							name: user.username,
							token,
						};
					}
				}

				if (info) {
					switch (info.code) {
					case 'ETIMEDOUT':
						throw new AuthenticationError('Failed to reach Google: Try again later...', {
							errors: {
								auth: 'Failed to reach Google: Try again later...',
							},
						});
					default:
						throw new AuthenticationError('something went wrong', {
							errors: {
								auth: 'something went wrong',
							},
						});
					}
				}
				return Error('server error');
			} catch (error) {
				return error;
			}
		},
	},
};
