const find = (req, res) =>
  res.json([{ _id: '1', name: 'Thing A' }, { id: '2', name: 'Thing B' }]);

const findOne = (req, res) => res.json({ name: 'zapato' });

const create = (req, res) => res.json({ name: 'toalla' });

module.exports = {
  find,
  findOne,
  create,
};
