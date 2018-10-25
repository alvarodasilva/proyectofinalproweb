// TO DO implement create code, to create an article,
// receives all article features
const create = (req, res) =>
  res.json({ name: 'Create article with this features - ' });

// TO DO implement find code, to return an array of articles
const find = (req, res) => res.json({ name: 'Return all articles' });

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
