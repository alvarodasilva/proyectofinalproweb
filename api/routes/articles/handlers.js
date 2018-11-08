const Article = require('../../models/article.js');
// TO DO implement create code, to create an article,
// receives all article features
const create = (req, res) =>
  res.json({ name: 'Create article with this features - ' });

// TO DO implement find code, to return an array of articles
const find = async (req, res) => {
  const { limit, ...query } = req.query;
  const articles = await Article.find(query).limit(limit);
  console.log(articles);

  return res.json(articles);
};

const findOne = (req, res) => {
  console.log('Return article of the id %s .', req.params.id);
  return Article.findById(req.params.id);
};

module.exports = {
  create,
  find,
  findOne,
};
