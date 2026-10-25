const Department = require('../models/departmentModel');

// Department create karna
const createDepartment = async (req, res) => {
    try {
        const newDepartment = new Department(req.body);
        await newDepartment.save();
        res.status(201).json({ success: true, message: "Department successfully ban gaya hai", data: newDepartment });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// Sabhi departments get karna
const getDepartments = async (req, res) => {
    try {
        const departments = await Department.find();
        res.status(200).json({ success: true, data: departments });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

module.exports = { createDepartment, getDepartments };