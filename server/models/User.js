const mongoose = require('mongoose');
const { Schema } = mongoose; //takes away ability to have unknown in records

const userSchema = new Schema ({
    googleId: String, 
    points: Number, 
    betPoints: { type: Number, default: 0 }
});

// telling mongoose we want to create a new collection called users: (name of collection, userSchema/const from new schema)
const User = mongoose.model('users', userSchema);

module.exports = User;
