const Prescription = require('../models/prescriptionModel');

// Prescription create karna
const createPrescription = async (req, res) => {
    try {
        const newPrescription = new Prescription(req.body);
        await newPrescription.save();
        res.status(201).json({ success: true, message: "Prescription successfully ban gayi hai", data: newPrescription });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// Prescriptions get karna
const getPrescriptions = async (req, res) => {
    try {
        const prescriptions = await Prescription.find().populate('patient doctor');
        res.status(200).json({ success: true, data: prescriptions });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

module.exports = { createPrescription, getPrescriptions };