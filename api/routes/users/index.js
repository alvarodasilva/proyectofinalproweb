const checkAuth = require('../../middlewares/check-auth.js');
const handlers = require('./handlers');
const validators = require('./validators');

module.exports = router => {
  router.get('/users', checkAuth, validators.find, handlers.find);
  router.post('/users', validators.create, handlers.create);
  router.get('/users/:id', checkAuth, validators.find, handlers.findById);
  router.put('/users/:id', checkAuth, validators.update, handlers.update);
  router.delete(
    '/users/:id',
    checkAuth,
    validators.deletion,
    handlers.deletion,
  );
  return router;
};
