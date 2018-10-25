const mongoose = require('mongoose');

// Define the schema.
const offerSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
  },
  { timestamps: true },
);

// Create the model from the schema.
const Offer = mongoose.model('Offer', OfferSchema);
module.exports = Offer;
