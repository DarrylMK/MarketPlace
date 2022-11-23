const mongoose = require('mongoose');

const Users = require('./user');

mongoose.connect(
  'mongodb+srv://darryl:darryl@cluster0.pvv1bmd.mongodb.net/?retryWrites=true&w=majority'
  );

const db = mongoose.connection;
db.once('open', () => {
  console.log('Connected to MongoDB server!');
});

module.exports = {
  db,
  Users,
};
