const jwt = require('jsonwebtoken');
const cookieParser = require('../utils/cookie-parser.js');

module.exports = (req, res, next) => {
  req.cookies = cookieParser(req.headers.cookie);
  try {
    if (
      req.cookies.access_token !== undefined &&
      req.cookies.access_token !== null
    ) {
      const decoded = jwt.verify(req.cookies.access_token, process.env.JWT_KEY);
      req.userData = decoded;
      next();
    } else {
      throw 'No authorizon cookie present';
    }
  } catch (error) {
    res.redirect('/login');
  }
};