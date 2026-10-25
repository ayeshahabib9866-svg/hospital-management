const Appointment = require('../models/appointmentModel');

// Nayi appointment create karna
const createAppointment = async (req, res) => {
    try {
        const newAppointment = new Appointment(req.body);
        await newAppointment.save();
        res.status(201).json({ success: true, message: "Appointment successfully ban gayi hai", data: newAppointment });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// Sabhi appointments get karna
const getAppointments = async (req, res) => {
    try {
        const appointments = await Appointment.find().populate('patient doctor');
        res.status(200).json({ success: true, data: appointments });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

module.exports = { createAppointment, getAppointments };