const Billing = require('../models/billingModel');

// Bill generate karna
const createBill = async (req, res) => {
    try {
        const newBill = new Billing(req.body);
        await newBill.save();
        res.status(201).json({ success: true, message: "Bill successfully generate ho gaya hai", data: newBill });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// Bill details get karna
const getBills = async (req, res) => {
    try {
        const bills = await Billing.find().populate('patient');
        res.status(200).json({ success: true, data: bills });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

module.exports = { createBill, getBills };