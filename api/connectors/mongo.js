const mongoose = require('mongoose');
const mongoUri = 'mongodb://localhost/database';

mongoose.connect(process.env.DB_HOST);
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

db.once('open', () => {
  console.log('MongoDB connection successfully initiated:' + mongoUri);
  console.info('Defining Schemas ... ');
  require('../models');
  console.info('Schemas defined successfully.');
});

module.exports = db;
