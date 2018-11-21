const mongoose = require('mongoose');

/* Define the schema. */
const offerSchema = new mongoose.Schema(
  {
    _id: String,
    bidder_id: { type: String, required: true },
    bidder_article_id: { type: String, required: true },
    user_id: { type: String, required: true },
    article_id: { type: String, required: true },
    /* status: { type: String, required: true }, */
  },
  { timestamps: true },
);

/* Possible values for status??? */

/* Create the model from the schema. */
const Offer = mongoose.model('Offer', offerSchema, 'offers');
module.exports = Offer;
