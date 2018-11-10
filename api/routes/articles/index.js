const handlers = require('./handlers');
const validators = require('./validators');

//TO DO add validators and correct parameters

module.exports = router => {
  router.post('/articles', validators.create, handlers.create);
  router.get('/articles', validators.find, handlers.find);
  router.get('/articles/:id', handlers.findOne);
  router.get('/articles/:type', handlers.findType);
  router.get('/articles/:id', handlers.userArticles);

  return router;
};
