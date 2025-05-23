const mongoose = require('mongoose');

const registerSchema = mongoose.Schema({
    userName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    mobileNo :{
        type: Number,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    isDelete : {
        type: String,
        default: false
    }, 
    role: {
        type: String,
        enum: ['admin', 'user'],
        default: 'user'
    },
},{
    timestamps: true
});

module.exports = mongoose.model('user', registerSchema);