const Patient = require('../models/patientModel');

// Patient register karna
const registerPatient = async (req, res) => {
    try {
        const newPatient = new Patient(req.body);
        await newPatient.save();
        res.status(201).json({ success: true, message: "Patient successfully register ho gaya hai", data: newPatient });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// Sabhi patients ki list lena
const getPatients = async (req, res) => {
    try {
        const patients = await Patient.find();
        res.status(200).json({ success: true, data: patients });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

module.exports = { registerPatient, getPatients };