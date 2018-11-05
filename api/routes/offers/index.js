const handlers = require('./handlers');
// const validators = require('./validators');

//TO DO add validators and correct parameters
module.exports = router => {
  router.post('/offers/:id1/:id2', handlers.create);
  router.get('/offers/', handlers.find);
  router.get('/offers/:id', handlers.userOffers);

  return router;
};
