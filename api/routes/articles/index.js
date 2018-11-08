const handlers = require('./handlers');

//TO DO add validators and correct parameters

module.exports = router => {
  router.post('/articles', handlers.create);
  router.get('/articles', handlers.find);
  router.get('/articles/:id', handlers.findOne);
  router.get('/articles/:id', handlers.userArticles);

  return router;
};
