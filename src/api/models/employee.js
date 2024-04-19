const mongoose = require("mongoose");


const employeeSchema = new mongoose.Schema({
    rid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Roles'
    },
    name: {
        type: String,
        required: true,
    },
    empcode: {
        type: String,
        required: true,
        unique: true,
    },
    mail_id: {
        type: String,
        required: true,
        unique: true,
    },
    phone_number: {
        type: String,
        required: true,
        unique: true,
    }
}, { timestamps: true });

const Employee = mongoose.model('Employee', employeeSchema);
module.exports = Employee;