const mongoose = require('mongoose');
require('../models/article.js');
require('../models/offer.js');
require('../models/type.js');
require('../models/user.js');

// const Article = require('../models/article.js');
// const Offer = require('../models/offer.js');
// const Type = require('../models/type.js');
// const User = require('../models/user.js');

// TODO Replace by project and in the future also `env`.
const mongoUri = 'mongodb://localhost/database';

// Connect to MongoDB.
// const db = mongoose.connection;

mongoose.connect(mongoUri);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'mongoDB connection error:'));
db.once('open', () => {
  console.log('mongoDB connection success: ${mongoUri}');
});

// module.export = db;

// var art = new Article({ name: 'Article 1 ' });
// var off = new Offer({ name: 'Offer 1 ' });
// var typ = new Type({ name: 'Type 1 ' });
// var usr = new User({ name: 'User 1 ' });

// console.log(art);
// console.log(off);
// console.log(typ);
// console.log(usr);
