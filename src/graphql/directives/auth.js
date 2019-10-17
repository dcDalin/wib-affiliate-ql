import { SchemaDirectiveVisitor } from 'apollo-server-express';
import { defaultFieldResolver } from 'graphql';
import checkAuth from '../resolvers/user/auth/checkAuth';

class AuthDirective extends SchemaDirectiveVisitor {
  // eslint-disable-next-line class-methods-use-this
  visitFieldDefinition(field) {
    const { resolve = defaultFieldResolver } = field;
    // eslint-disable-next-line no-param-reassign
    field.resolve = (...args) => {
      const [, , context] = args;
      checkAuth(context);

      return resolve.apply(this, args);
    };
  }
}

export default AuthDirective;
