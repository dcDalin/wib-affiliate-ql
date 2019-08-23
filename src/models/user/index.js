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
  },
  {
    timestamps: true,
  },
  {
    strict: true,
  },
);

export default model('User', userSchema);
