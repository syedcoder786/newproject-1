const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema
const UserSchema = new Schema({
    name: {
        type:String,
        required:true
    },
    email: {
        type:String,
        required:true
    },
    phone: {
        type:String,
        required:true
    },
    address: {
        type:String,
        required:true
    },
    Date: {
        type:Date,
        default:Date.now
    }
})

module.exports = User = mongoose.model('user', UserSchema);