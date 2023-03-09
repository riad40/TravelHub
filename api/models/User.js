const mongoose = require('mongoose')
// const roles = require('./UsersRole')

const userSchema = new mongoose.Schema({

    username: {
        type: String,
        required: true,
        max: 255,
        min: 4
    },
    email: {
        type: String,
        required: true,
        max: 255    
    },
    password: {
        type: String,
        required: true,
        max: 1024    
    },  
    register_date: {
        type: Date,
        default: Date.now
    },
    emailIsValid: {
        type: Boolean,
        default: false
    },
    resetTokenValid: {
        type: String
    },
    role: [{
        type: mongoose.Types.ObjectId,
        ref: 'roles'
    }]
})

module.exports = mongoose.model('User', userSchema)