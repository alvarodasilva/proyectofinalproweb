const User = require('mongoose').model('User');

const find = (req, res) => {
  User.find(req.query, function(err, query_response) {
    if (err != undefined && err != null) {
      res.json({ error: 'Something went really wrong' });
    } else {
      res.json(query_response);
    }
  });
};

const findById = (req, res) => {
  User.findById(req.params.id, function(err, query_response) {
    if (err != undefined && err != null) {
      res.json({ error: 'Something went really wrong' });
    } else {
      res.json(query_response);
    }
  });
};

const create = (req, res) => {
  let user_data = req.body;
  user_data._id = require('uuid/v1')();
  User.create(user_data, function(err, user) {
    if (err != undefined && err != null) {
      res.json({ error: 'Something went really wrong' });
    } else {
      res.json(user);
    }
  });
};

const update = (req, res) => {
  User.updateOne({ _id: req.params.id }, req.body, function(
    err,
    query_response,
  ) {
    if (err != undefined && err != null) {
      res.json({ error: 'Something went really wrong' });
    } else {
      res.json(query_response);
    }
  });
};

const deletion = (req, res) => {
  User.deleteOne({ _id: req.params.id }, function(err, query_response) {
    if (err != undefined && err != null) {
      res.json({ error: 'Something went really wrong' });
    } else {
      res.json(query_response);
    }
  });
};

module.exports = {
  find,
  findById,
  create,
  update,
  deletion,
};
