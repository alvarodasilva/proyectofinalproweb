const mongoose = require('mongoose');

mongoose.set('useCreateIndex', true);
mongoose.connect(
  process.env.DB_HOST,
  { useNewUrlParser: true },
);
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

db.once('open', () => {
  console.log(
    'MongoDB connection successfully initiated:' + process.env.DB_HOST,
  );
  console.info('Defining Schemas ... ');
  require('../models');
  console.info('Schemas defined successfully.');
});

module.exports = db;
