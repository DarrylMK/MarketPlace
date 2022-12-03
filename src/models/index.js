const mongoose = require('mongoose');

const Users = require('./user');
const shipping = require('./shipping');
const Reset = require('./reset');

mongoose.connect(
'mongodb+srv://Roberto:Roberto19@cluster0.tlyg1u3.mongodb.net/?retryWrites=true&w=majority'
);

const db = mongoose.connection;
db.once('open', () => {
  console.log('Connected to MongoDB server!');
});

module.exports = {
  db,
  Users,
  shipping,
  Reset,
};
