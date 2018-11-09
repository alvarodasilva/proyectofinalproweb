const Type = require('mongoose').model('Type');

const find = (req, res) => {
  Type.find(req.query, function(err, types) {
    if (err != undefined && err != null) {
      res.json({ error: 'Something went really wrong' });
    } else {
      res.json(types);
    }
  });
};

const findById = (req, res) => {
  Type.findById(req.params.id, function(err, type) {
    if (err != undefined && err != null) {
      res.json({ error: 'Something went really wrong' });
    } else {
      res.json(type);
    }
  });
};

module.exports = {
  find,
  findById,
};
