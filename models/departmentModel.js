import mongoose from "mongoose";

const departmentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true
    },

    description: {
      type: String
    },

    location: {
      type: String
    }
  },
  {
    timestamps: true
  }
);

const Department = mongoose.model("Department", departmentSchema);

export default Department;

Examples:

Cardiology
Neurology
Dental
Emergency
Orthopedics
Dermatology
