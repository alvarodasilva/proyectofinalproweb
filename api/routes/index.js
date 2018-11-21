const users = require('./users');
const articles = require('./articles');
const types = require('./types');
const offers = require('./offers');
const sessions = require('./sessions');

const resourceRoutes = [users, articles, types, offers, sessions];

module.exports = router => {
  resourceRoutes.forEach(routes => routes(router));
  return router;
};
