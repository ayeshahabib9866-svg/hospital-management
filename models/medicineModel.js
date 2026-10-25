import mongoose from "mongoose";

const medicineSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },

    category: {
      type: String
    },

    manufacturer: {
      type: String
    },

    price: {
      type: Number,
      required: true
    },

    quantity: {
      type: Number,
      default: 0
    },

    expiryDate: {
      type: Date
    }
  },
  {
    timestamps: true
  }
);

const Medicine = mongoose.model("Medicine", medicineSchema);

export default Medicine;