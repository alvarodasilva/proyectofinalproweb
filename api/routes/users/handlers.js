const mongoose = require('mongoose');
const User = mongoose.model('User');

const find = (req, res) => {
  User.find(null, function(err, query_response) {
    if (err != undefined && err != null) {
      res.json({ error: 'Something went really wrong' });
    } else {
      res.json(query_response);
    }
  });
};

const findOne = (req, res) => res.json({ name: 'guille' });

const findById = (req, res) => {
  console.log(require('uuid/v1')());
  User.findById(req.params.id, function(err, query_response) {
    if (err != undefined && err != null) {
      res.json({ error: 'Something went really wrong' });
    } else {
      res.json(query_response);
    }
  });
};

const create = (req, res) => {
  req.body._id = require('uuid/v1')();
  User.create(req.body, function(err, user) {
    if (err != undefined && err != null) {
      res.json({ error: 'Something went really wrong' });
    } else {
      res.json(user);
    }
  });
};

module.exports = {
  find,
  findOne,
  findById,
  create,
};
