const handlers = require('./handlers');
const validators = require('./validators');

module.exports = router => {
  router.get('/articles', validators.find, handlers.find);
  router.post('/articles', validators.create, handlers.create);
  router.get('/articles/:id', validators.find, handlers.findById);
  router.put('/articles/:id', validators.update, handlers.update);
  router.delete('/articles/:id', validators.deletion, handlers.deletion);
  return router;
};
