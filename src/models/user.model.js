const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    dob:{
        type: String,
        required:true
    } // date of birth format D/M
});


module.exports = mongoose.model('birthdayReminder',userSchema);