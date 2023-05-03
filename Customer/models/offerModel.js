import { Schema, model } from "mongoose";

const offerSchema = Schema(
  {
    offer: {
      type: String,
      required: true,
    },
    amount: {
      type: String,
      required: true,
    }
  },
  {
    timestamps: true,
  }
);

export default model("Offer", offerSchema);
