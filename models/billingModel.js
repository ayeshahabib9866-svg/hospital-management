import mongoose from "mongoose";

const billingSchema = new mongoose.Schema(
  {
    patient: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Patient",
      required: true
    },

    consultationFee: {
      type: Number,
      default: 0
    },

    medicineFee: {
      type: Number,
      default: 0
    },

    roomFee: {
      type: Number,
      default: 0
    },

    otherCharges: {
      type: Number,
      default: 0
    },

    totalAmount: {
      type: Number,
      required: true
    },

    paymentStatus: {
      type: String,
      enum: ["Pending", "Paid", "Partially Paid"],
      default: "Pending"
    }
  },
  {
    timestamps: true
  }
);

const Billing = mongoose.model("Billing", billingSchema);

export default Billing;
🔗 How the models are connected
User
 │
 ├── Patient
 │     │
 │     ├── Appointment ─── Doctor
 │     │                     │
 │     │                     └── Department
 │     │
 │     ├── Prescription
 │     │
 │     ├── Medical Record ── Doctor
 │     │
 │     ├── Room
 │     │
 │     └── Billing
 │
 └── Doctor

The important part here is ref. For example:

patient: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Patient"
}