const Article = require('mongoose').model('Article');
// TO DO implement create code, to create an article,
// receives all article features
const create = (req, res) =>
  res.json({ name: 'Create article with this features - ' });

// TO DO implement find code, to return an array of articles
const find = (req, res) => {
  Article.find(req.query, function(err, query_response) {
    if (err != undefined && err != null) {
      res.json({ error: 'Something went really wrong' });
    } else {
      res.json(query_response);
    }
  });
};

// TO DO implement findOne code, to return a specific article,
// receives articleID
const findOne = (req, res) => res.json({ name: 'Return article of the id .' });

// TO DO implement findType code, to return an array
// of articles of a specific type, receives type
const findType = (req, res) => res.json({ name: 'Return article of type - ' });

// TO DO implement userArticles code, to return an array
// of articles of a specific user, receives userID
const userArticles = (req, res) =>
  res.json({ name: 'Return article of the owner - ' });

module.exports = {
  create,
  find,
  findType,
  findOne,
  userArticles,
};
