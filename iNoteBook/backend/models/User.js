const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true // Prevent duplicate emails
    },
    password: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

// Create the model
const User = mongoose.model('User', UserSchema);

// Ensure indexes are created (including unique indexes)
User.createIndexes();

module.exports = User;
