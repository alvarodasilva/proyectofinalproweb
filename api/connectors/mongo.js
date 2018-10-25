const mongoose = require('mongoose');

// TODO Replace by project and in the future also `env`.
const mongoUri = 'mongodb://localhost/database';

// Connect to MongoDB.
mongoose.connect(mongoUri);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'mongoDB connection error:'));
db.once('open', () => {
  console.log('mongoDB connection success: ${mongoUri}');
});
