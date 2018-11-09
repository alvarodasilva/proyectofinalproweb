const mongoose = require('mongoose');

/* Define the schema. */
const userSchema = new mongoose.Schema(
  {
    _id: String,
    name: { type: String, required: true },
    mail: { type: String, required: true },
  },
  { timestamps: true },
);

/* Create the model from the schema. */
const User = mongoose.model('User', userSchema, 'users');
module.exports = User;
