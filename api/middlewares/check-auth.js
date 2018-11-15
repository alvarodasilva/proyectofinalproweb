const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  try {
    if (req.headers.token != undefined) {
      const decoded = jwt.verify(req.headers.token, process.env.JWT_KEY);
      req.userData = decoded;
      console.log(req.userData);
      next();
    } else {
      throw 'No authorizon token present';
    }
  } catch (error) {
    return res.status(401).json({ message: 'Auth Failed', error });
  }
};
