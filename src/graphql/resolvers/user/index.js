import users from './users';
import * as Auth from './auth';
import me from './me';

export default {
  Query: {
    ...users.Query,
    ...me.Query,
  },
  Mutation: {
    ...Auth.userSignUp.Mutation,
    ...Auth.authGoogle.Mutation,
    ...Auth.userLogin.Mutation,
  },
};
