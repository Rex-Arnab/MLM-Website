// Create a user model for mongodb

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
  
// Build a user schema
var UserSchema = new Schema({
    name: String,
    email: String,
    password: String,
    balance: Number,
    level: Number,
    referel_code: String,
    header_user: String,
    bank: {
        name: String,
        account_number: String,
        account_type: String,
        account_holder: String
    }
});


var User = mongoose.model('User', UserSchema);

module.exports = User;