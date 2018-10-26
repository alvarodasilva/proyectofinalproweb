const find = (req, res) =>
  res.json([{ _id: "1", name: "Thing A" }, { id: "2", name: "Thing B" }]);

const findOne = (req, res) => res.json({ name: "guille" });

const create = (req, res) => res.json({ name: "francisco" });

module.exports = {
  find,
  findOne,
  create
};
