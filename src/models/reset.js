const mongoose = require('mongoose');

const resetSchema = mongoose.Schema({
  resetEmail: String,
});

module.exports = mongoose.model('Reset', resetSchema);
