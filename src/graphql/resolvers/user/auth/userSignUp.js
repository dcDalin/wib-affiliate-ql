/* eslint-disable no-unused-vars */
/* eslint-disable no-underscore-dangle */
import { UserInputError } from 'apollo-server-express';
import bcrypt from 'bcryptjs';
import User from '../../../../models/user';
import { generateToken } from '../../utils/generateToken';

export default {
  Mutation: {
    async userSignUp(
      _,
      {
        userSignUpInput: {
          // eslint-disable-next-line no-unused-vars
          username,
          emailAddress,
          password,
          confirmPassword,
        },
      },
    ) {
      // Make sure username doesn't exist
      const userUsername = await User.findOne({ username });
      if (userUsername) {
        throw new UserInputError('Username is taken', {
          errors: {
            username: 'This username is taken',
          },
        });
      }

      // Make sure email doesn't exist
      const userEmail = await User.findOne({ 'email.emailAddress': emailAddress });
      if (userEmail) {
        throw new UserInputError('Email exists', {
          errors: {
            username: 'Email already exists',
          },
        });
      }

      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 12);

      const newUser = new User({
        username,
        email: {
          emailAddress,
        },
        password: hashedPassword,
      });

      // Save to DB
      const res = await newUser.save();

      // Generate token
      const token = generateToken(res);

      return {
        ...res._doc,
        id: res._id,
        token,
      };
    },
  },
};
