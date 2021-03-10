const mongoose = require('mongoose');

var loginSchema = new mongoose.Schema({
    email : {
        type : String,
        required: true,
        unique: true
    },
    password : {
        type: String,
        required: true
    }
})

const loginDB = mongoose.model('login', loginSchema, 'logindatabase');

module.exports = loginDB;

// module.exports = {
//   loginDB : loginDB,
//   userDB : userDB
// }
