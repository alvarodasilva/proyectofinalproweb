const User = require('../../models/user.js');

const mongoose = require('mongoose');

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

const create = (req, res) => res.json({ name: 'francisco' });

module.exports = {
  find,
  findOne,
  create,
};
