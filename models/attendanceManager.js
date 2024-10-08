const mongoose = require('mongoose');
//Defining the schema for attendanceManager
const attendanceManagerSchema = new mongoose.Schema({
    email:{
        type: String,
        required: true,
        unique: true,
        trim: true,

    },
    password:{
        type: String,
        required: true,

    }, 
    role: {
        type: String,
        default: 'Attendance Manager',
        enum: ['attendance-manager', 'Admin'],
    },
    
    //timestamps: true,
    
});
const AttendanceManager = mongoose.model('AttendanceManager', attendanceManagerSchema);
module.exports = AttendanceManager;