const users = require('./users');
const articles = require('./articles');
const types = require('./types');

const resourceRoutes = [users, articles, types];

module.exports = router => {
  resourceRoutes.forEach(routes => routes(router));
  return router;
};
