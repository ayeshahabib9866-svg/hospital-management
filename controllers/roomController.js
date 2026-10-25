const Room = require('../models/roomModel');

// Room allocate/add karna
const addRoom = async (req, res) => {
    try {
        const newRoom = new Room(req.body);
        await newRoom.save();
        res.status(201).json({ success: true, message: "Room successfully add ho gaya hai", data: newRoom });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// Rooms get karna
const getRooms = async (req, res) => {
    try {
        const rooms = await Room.find();
        res.status(200).json({ success: true, data: rooms });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

module.exports = { addRoom, getRooms };