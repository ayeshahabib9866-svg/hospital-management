const User = require('../models/userModel');

// Sabhi users get karna (Admin ke liye)
const getUsers = async (req, res) => {
    try {
        const users = await User.find().select('-password'); // Password hide rakha hai
        res.status(200).json({ success: true, data: users });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// User delete karna
const deleteUser = async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json({ success: true, message: "User successfully delete ho gaya hai" });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

module.exports = {
    getUsers,
    deleteUser
};