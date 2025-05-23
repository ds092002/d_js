const mongoose = require('mongoose');
const studentSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    age: {
        type: String,
        required: true,
        min: 0
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    course: {
        type: String,
        required: true,
        trim: true
    },
    isDelete: {
        type: Boolean,
        default: false
    }
},
{
    timestamps: true
});

module.exports = mongoose.model('student', studentSchema);