const mongoose = require('mongoose');

// Define the schema.
const articleSchema = new mongoose.Schema(
  {
    aname: { type: String, required: true },
    adesc: { type: String, required: true },
    aphoto: { type: String, required: true },
    tid: { type: String, required: true },
    uid: { type: String, required: true },
  },
  { timestamps: true },
);

// Create the model from the schema.
const Article = mongoose.model('Article', articleSchema);
module.exports = Article;
