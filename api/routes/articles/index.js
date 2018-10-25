const handlers = require('./handlers');
const validators = require('./validators');

module.exports = router => {
  router.get('/articles', validators.find, handlers.find);
  router.post('/articles', validators.create, handlers.create);
  router.get('/articles/:id', validators.findOne, handlers.findOne);
  return router;
};
