const handlers = require('./handlers');
const validators = require('./validators');

module.exports = router => {
  router.post('/sessions', validators.create, handlers.create);
  return router;
};
