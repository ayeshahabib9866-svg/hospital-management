import mongoose from "mongoose";

const prescriptionSchema = new mongoose.Schema(
  {
    patient: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Patient",
      required: true
    },

    doctor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Doctor",
      required: true
    },

    medicines: [
      {
        medicine: {
          type: String,
          required: true
        },

        dosage: {
          type: String
        },

        duration: {
          type: String
        },

        instructions: {
          type: String
        }
      }
    ],

    notes: {
      type: String
    }
  },
  {
    timestamps: true
  }
);

const Prescription = mongoose.model(
  "Prescription",
  prescriptionSchema
);

export default Prescription;