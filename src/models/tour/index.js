import { Schema, model } from 'mongoose';

const tourSchema = new Schema(
  {
    tourTitle: {
      type: String,
      required: true,
    },
    tourDescription: {
      shortDescription: String,
      longDescription: String,
      aboutTour: String,
      inclusions: String,
      exclusions: String,
      knowBeforeYouBook: String,
    },
    price: {
      phoneNumber: String,
      isVerified: { type: Boolean, default: false },
    },
    password: String,
    tags: {
      type: [{ type: String }],
    },
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: 'users',
    },
    approved: String,
  },
  {
    timestamps: true,
  },
  {
    strict: true,
  },
);

export default model('Tour', tourSchema);
