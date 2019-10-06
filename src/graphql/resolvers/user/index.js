import users from './users';
import * as Auth from './auth';

export default {
  Query: {
    ...users.Query,
  },
  Mutation: {
    ...Auth.userSignUp.Mutation,
    ...Auth.authGoogle.Mutation,
    ...Auth.userLogin.Mutation,
  },
};
