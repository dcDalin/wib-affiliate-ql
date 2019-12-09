import { Schema, model } from 'mongoose';

const userSchema = new Schema(
	{
		username: {
			type: String,
			required: true,
			unique: true,
		},
		email: {
			emailAddress: {
				type: String,
				required: true,
				unique: true,
			},
			isVerified: { type: Boolean, default: false },
		},
		phone: {
			phoneNumber: String,
			isVerified: { type: Boolean, default: false },
		},
		password: String,
		roles: {
			type: [{ type: String, enum: ['user', 'publisher', 'affiliate', 'super-admin', 'admin'] }],
			default: 'user',
		},
		social: {
			googleProvider: {
				id: String,
				token: String,
			},
		},
	},
	{
		timestamps: true,
	},
	{
		strict: true,
	},
);

userSchema.statics.upsertGoogleUser = async function genGoogleTok({ accessToken, profile }) {
	const User = this;

	const user = await User.findOne({ 'social.googleProvider.id': profile.id });

	// no user was found, lets create a new one
	if (!user) {
		const newUser = await User.create({
			username: profile.displayName || `${profile.familyName} ${profile.givenName}`,
			email: {
				emailAddress: profile.emails[0].value,
				isVerified: true,
			},
			'social.googleProvider': {
				id: profile.id,
				token: accessToken,
			},
		});

		return newUser;
	}
	return user;
};

export default model('User', userSchema);
