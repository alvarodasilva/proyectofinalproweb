const handlers = require('./handlers');
const validators = require('./validators');

module.exports = router => {
  router.get('/users', validators.find, handlers.find);
  router.post('/users', validators.create, handlers.create);
  router.get('/users/:id', validators.find, handlers.findById);
  return router;
};
