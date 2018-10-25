const users = require('./users');
const articles = require('./articles');

const resourceRoutes = [users, articles];

module.exports = router => {
  resourceRoutes.forEach(routes => routes(router));
  return router;
};
