const Doctor = require('../models/doctorModel');

// Naya doctor add karna
const addDoctor = async (req, res) => {
    try {
        const newDoctor = new Doctor(req.body);
        await newDoctor.save();
        res.status(201).json({ success: true, message: "Doctor successfully add ho gaya hai", data: newDoctor });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// Sabhi doctors ki list lena
const getDoctors = async (req, res) => {
    try {
        const doctors = await Doctor.find();
        res.status(200).json({ success: true, data: doctors });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

module.exports = { addDoctor, getDoctors };