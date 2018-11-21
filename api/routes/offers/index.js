const checkAuth = require('../../middlewares/check-auth.js');
const handlers = require('./handlers');
const validators = require('./validators');

//TO DO add validators and correct parameters
module.exports = router => {
  router.get('/offers', checkAuth, validators.find, handlers.find);
  router.post('/offers', checkAuth, validators.create, handlers.create);
  router.get('/offers/:id', checkAuth, validators.find, handlers.findById);
  router.put('/offers/:id', checkAuth, validators.update, handlers.update);
  router.delete(
    '/offers/:id',
    checkAuth,
    validators.deletion,
    handlers.deletion,
  );

  return router;
};
