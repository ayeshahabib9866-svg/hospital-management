const MedicalRecord = require('../models/medicalRecordModel');

// Medical record add karna
const addMedicalRecord = async (req, res) => {
    try {
        const newRecord = new MedicalRecord(req.body);
        await newRecord.save();
        res.status(201).json({ success: true, message: "Medical record add ho gaya hai", data: newRecord });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// Medical records get karna
const getMedicalRecords = async (req, res) => {
    try {
        const records = await MedicalRecord.find().populate('patient doctor');
        res.status(200).json({ success: true, data: records });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

module.exports = { addMedicalRecord, getMedicalRecords };