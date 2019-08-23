import users from './users';
import userSignUp from './userSignUp';

export default {
  Query: {
    ...users.Query,
  },
  Mutation: {
    ...userSignUp.Mutation,
  },
};
