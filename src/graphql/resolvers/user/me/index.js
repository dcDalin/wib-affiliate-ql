import User from '../../../../models/user';
import checkAuth from '../auth/checkAuth';

export default {
	Query: {
		me: (_, _args, context) => {
			const me = checkAuth(context);
			return User.findById(me.id);
		},
	},
};
