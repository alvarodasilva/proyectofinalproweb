const mongoose = require('mongoose');

// Define the schema.
const articleSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
  },
  { timestamps: true },
);

// Create the model from the schema.
const Article = mongoose.model('Article', articleSchema);
module.exports = Article;
