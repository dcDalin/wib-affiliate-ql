/* eslint-disable no-underscore-dangle */
import { UserInputError } from 'apollo-server-express';
import bcrypt from 'bcryptjs';
import User from '../../../../models/user';
import validateLogin from './validateLogin';
import { generateToken } from '../../utils/generateToken';

export default {
  Mutation: {
    async userLogin(_, { email, password }) {
      // Validate user input
      const { valid, errors } = validateLogin(email, password);
      if (!valid) {
        throw new UserInputError('Errors', { errors });
      }

      const user = await User.findOne({ 'email.emailAddress': email });

      if (!user) {
        errors.general = 'User not found';
        throw new UserInputError('User not found', { errors });
      }

      const match = await bcrypt.compare(password, user.password);

      if (!match) {
        errors.general = 'Wrong credentials';
        throw new UserInputError('Wrong credentials', { errors });
      }

      const token = generateToken(user);

      return {
        ...user._doc,
        id: user._id,
        token,
      };
    },
  },
};
