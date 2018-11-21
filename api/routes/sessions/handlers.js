const User = require('mongoose').model('User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const create = (req, res) => {
  console.log(req.param);
  console.log(req.body);
  User.findOne({ mail: req.body.mail })
    .then(user => {
      bcrypt
        .compare(req.body.password, user.password)
        .then(result => {
          if (result) {
            delete user.password;
            let token = jwt.sign({ user }, process.env.JWT_KEY, {
              expiresIn: 60 * 60 * 24,
            });
            token = 'Bearer ' + token;
            res.json({ token, user });
          } else {
            res.json({ error: '401: Wrong password' });
          }
        })
        .catch(error =>
          res.json({ error: 'Something went wrong', error_message: error }),
        );
    })
    .catch(error =>
      res.json({
        error: '401: No such user with that email',
        error_message: error,
      }),
    );
};

module.exports = {
  create,
};
