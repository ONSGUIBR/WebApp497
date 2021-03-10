const mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    email : {
        type : String,
        required: true,
        unique: true
    },
    password : {
        type: String,
        required: true
    },
    A_id : {
      type: String,
      required: true,
      unique: true
    },
    First_Name : {
      type: String,
      required: true
    },
    Last_Name : {
      type: String,
      required: true
    },
    Phone_Number : {
      type: Number,
      required: true,
      unique: true
    }
})

const userDB = mongoose.model('user', userSchema, 'userdatabase');

module.exports = userDB;
