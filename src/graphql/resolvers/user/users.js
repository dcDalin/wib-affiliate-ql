import User from '../../../models/user';

export default {
  Query: {
    users: () => User.find({}),
  },
};
