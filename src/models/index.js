const mongoose = require('mongoose');

const Users = require('./user');
const shipping = require('./shipping');

mongoose.connect(
'mongodb://Dionathan:Dionathan@ac-w9ggdwl-shard-00-00.7rchlft.mongodb.net:27017,ac-w9ggdwl-shard-00-01.7rchlft.mongodb.net:27017,ac-w9ggdwl-shard-00-02.7rchlft.mongodb.net:27017/?ssl=true&replicaSet=atlas-ng3ied-shard-0&authSource=admin&retryWrites=true&w=majority'
);

const db = mongoose.connection;
db.once('open', () => {
  console.log('Connected to MongoDB server!');
});

module.exports = {
  db,
  Users,
  shipping,
};
