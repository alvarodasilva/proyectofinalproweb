const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  try {
    if (req.headers.authorization != undefined) {
      const token = req.headers.authorization.split(' ')[1];
      const decoded = jwt.verify(token, process.env.JWT_KEY);
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
