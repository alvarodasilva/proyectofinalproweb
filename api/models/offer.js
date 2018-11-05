const mongoose = require('mongoose');

/* Define the schema. */
const offerSchema = new mongoose.Schema(
  {
    bidder_id: { type: String, required: true },
    bidder_article_id: { type: String, required: true },
    user_id: { type: String, required: true },
    article_id: { type: String, required: true },
  },
  { timestamps: true },
);

/* Create the model from the schema. */
const Offer = mongoose.model('Offer', offerSchema);
module.exports = Offer;
