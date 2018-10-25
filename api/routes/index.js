const users = require('./users');
const users = require('./articles');

const resourceRoutes = [users, articles];

module.exports = router => {
  resourceRoutes.forEach(routes => routes(router));
  return router;
};
