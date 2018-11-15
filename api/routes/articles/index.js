const checkAuth = require('../../middlewares/check-auth.js');
const handlers = require('./handlers');
const validators = require('./validators');

module.exports = router => {
  router.get('/articles', checkAuth, validators.find, handlers.find);
  router.post('/articles', checkAuth, validators.create, handlers.create);
  router.get('/articles/:id', checkAuth, validators.find, handlers.findById);
  router.put('/articles/:id', checkAuth, validators.update, handlers.update);
  router.delete(
    '/articles/:id',
    checkAuth,
    validators.deletion,
    handlers.deletion,
  );
  return router;
};
