const jwt = require('jsonwebtoken');
const cookieParser = require('../utils/cookie-parser.js');

module.exports = (req, res, next) => {
  req.cookies = cookieParser(req.headers.cookie);
  try {
    if (
      req.cookies.access_token !== undefined &&
      req.cookies.access_token !== null
    ) {
      const token = req.cookies.access_token.split('Bearer')[1];
      const decoded = jwt.verify(token, process.env.JWT_KEY);
      req.userData = decoded;
      res.redirect('/');
    } else {
      throw 'No authorizon cookie present';
    }
  } catch (error) {
    next();
  }
};
