const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: String, 
    password: String
});

const aUser = mongoose.model('aUser', UserSchema);

module.exports = aUser;