const mongoose = require('mongoose');

// Define the schema.
const offerSchema = new mongoose.Schema(
  {
    uid: { type: String, required: true },
    articleid: { type: String, required: true },
    offarticleid: { type: String, required: true },
  },
  { timestamps: true },
);

// Create the model from the schema.
const Offer = mongoose.model('Offer', offerSchema);
module.exports = Offer;
