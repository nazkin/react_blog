const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    // user: {
    //     id:{
    //         type: mongoose.Schema.Types.ObjectId,
    //         ref: 'User'
    //     },
    //     username: String
    // },
    user: String,
    title: String, 
    info: String,
    image: String
   // date: {type: Date, required: false, default: Date.now}
});

const aBlog = mongoose.model('aBlog', blogSchema);

module.exports = aBlog;