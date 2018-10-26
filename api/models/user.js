const mongoose = require('mongoose');

// Define the schema.
const userSchema = new mongoose.Schema(
  {
    uname: { type: String, required: true },
    umail: { type: String, required: true },
    upass: { type: String, required: true },
  },
  { timestamps: true },
);

// Create the model from the schema.
const User = mongoose.model('User', userSchema);
module.exports = User;
