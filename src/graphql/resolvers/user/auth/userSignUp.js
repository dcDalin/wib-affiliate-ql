/* eslint-disable no-unused-vars */
/* eslint-disable no-underscore-dangle */
import { UserInputError } from 'apollo-server-express';
import bcrypt from 'bcryptjs';
import User from '../../../../models/user';
import { generateToken } from '../../utils/generateToken';
import validateSignup from './validateSignup';

export default {
	Mutation: {
		async userSignUp(
			_,
			{
				userSignUpInput: {
					username, emailAddress, password, confirmPassword,
				},
			},
		) {
			// Validate user input
			const { valid, errors } = validateSignup(username, emailAddress, password, confirmPassword);
			if (!valid) {
				throw new UserInputError('Errors', { errors });
			}

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
