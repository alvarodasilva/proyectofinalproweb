const find = (req, res) =>
  res.json({ name: 'You have entered Articles route' });

const findOne = (req, res) => res.json({ name: 'this is the article' });

const create = (req, res) => res.json({ name: 'article created' });

module.exports = {
  find,
  findOne,
  create,
};
