const mongoose = require('mongoose');

const schema = mongoose.Schema({
  email: String,
  full_name: String,
  user_name: String,
  phone_no: String,
  password: String,
});

module.exports = mongoose.model('Users', schema);
