const Medicine = require('../models/medicineModel');

// Medicine add karna (Inventory)
const addMedicine = async (req, res) => {
    try {
        const newMedicine = new Medicine(req.body);
        await newMedicine.save();
        res.status(201).json({ success: true, message: "Medicine successfully add ho gayi hai", data: newMedicine });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// Sabhi medicines get karna
const getMedicines = async (req, res) => {
    try {
        const medicines = await Medicine.find();
        res.status(200).json({ success: true, data: medicines });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

module.exports = { addMedicine, getMedicines };