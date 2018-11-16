const User = require('mongoose').model('User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const find = (req, res) => {
  User.find(req.query)
    .then(users => res.json(users))
    .catch(err =>
      res.json({ error: 'Something went really wrong', erro_message: err }),
    );
};

const findById = (req, res) => {
  User.findById(req.params.id)
    .then(user => res.json(user))
    .catch(err =>
      res.json({ error: 'Something went really wrong', erro_message: err }),
    );
};

const generateToken = tokenData => {
  let token = jwt.sign(tokenData, process.env.JWT_KEY, {
    expiresIn: 60 * 60 * 24,
  });
  return token;
};

const create = (req, res) => {
  let user_data = req.body;
  user_data._id = require('uuid/v1')();
  bcrypt.genSalt(parseInt(process.env.SHA_SALTS), function(err, salt) {
    if (err != undefined && err != null) {
      res.json({ error: 'Something went really wrong' });
    } else {
      bcrypt.hash(user_data.password, salt, function(err, hash) {
        if (err != undefined && err != null) {
          res.json({ error: 'Something went really wrong' });
        } else {
          user_data.password = hash;
          User.create(user_data)
            .then(user => {
              delete user.password;
              token = generateToken({ user });
              res.json({ user, token });
            })
            .catch(err =>
              res.json({
                error: 'Something went really wrong',
                error_message: err,
              }),
            );
        }
      });
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
