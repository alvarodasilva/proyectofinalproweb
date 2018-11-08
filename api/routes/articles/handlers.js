const Article = require('../../models/article.js');
// TO DO implement create code, to create an article,
// receives all article features
const create = (req, res) => {
  var a = {
    _id: '5be3204331b057afea1332ab',
    name: 'Puro Futbol2',
    description:
      'Excelente libro de Fontanarrosa, relatos, anectodas y algunas cuestiones tactcias',
    type_id: '5be31e4131b057afea1332a8',
    user_id: '5be314dd31b057afea1332a2',
  };
  Article.create(a);
  res.json({ name: 'Create article with this features - ' });
};

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
