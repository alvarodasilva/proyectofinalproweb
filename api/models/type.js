const mongoose = require('mongoose');

// Define the schema.
const typeSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
  },
  { timestamps: true },
);

// Create the model from the schema.
const Type = mongoose.model('Type', typeSchema);
module.exports = Type;
