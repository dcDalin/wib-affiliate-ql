import { Schema, model } from 'mongoose';

const userSchema = new Schema(
  {
    username: String,
    email: {
      emailAddress: String,
      isVerified: { type: Boolean, default: false },
    },
    phone: {
      phoneNumber: String,
      isVerified: { type: Boolean, default: false },
    },
    password: String,
  },
  {
    timestamps: true,
  },
);

export default model('User', userSchema);
