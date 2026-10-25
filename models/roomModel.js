import mongoose from "mongoose";

const roomSchema = new mongoose.Schema(
  {
    roomNumber: {
      type: String,
      required: true,
      unique: true
    },

    roomType: {
      type: String,
      enum: ["General", "Private", "ICU", "Emergency"],
      required: true
    },

    pricePerDay: {
      type: Number,
      required: true
    },

    isAvailable: {
      type: Boolean,
      default: true
    },

    patient: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Patient"
    }
  },
  {
    timestamps: true
  }
);

const Room = mongoose.model("Room", roomSchema);

export default Room;
