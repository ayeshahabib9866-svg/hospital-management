import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

// Routes imports
import authRoute from "./routes/authRoute.js";
import appointmentRoute from "./routes/appointmentRoute.js";
import billingRoute from "./routes/billingRoute.js";
import departmentRoute from "./routes/departmentRoute.js";
import doctorRoute from "./routes/doctorRoute.js";
import medicalRecordRoute from "./routes/medicalRecordRoute.js";
import medicineRoute from "./routes/medicineRoute.js";
import patientRoute from "./routes/patientRoute.js";

dotenv.config();

const app = express();

// Middlewares
app.use(express.json());
app.use(cors());

// Environment variables
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/hospital_management";

// Database Connection
mongoose.connect(MONGO_URI)
    .then(() => console.log("MongoDB Database Connected Successfully!"))
    .catch((err) => console.log("Database connection error: ", err));

// API Routes
app.use("/api/auth", authRoute);
app.use("/api/appointments", appointmentRoute);
app.use("/api/billings", billingRoute);
app.use("/api/departments", departmentRoute);
app.use("/api/doctors", doctorRoute);
app.use("/api/medical-records", medicalRecordRoute);
app.use("/api/medicines", medicineRoute);
app.use("/api/patients", patientRoute);

// Test Root Route
app.get("/", (req, res) => {
    res.send("Hospital Management Backend is running and connected...");
});

// Server Listen
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});