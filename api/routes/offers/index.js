const handlers = require('./handlers');
const validators = require('./validators');

//TO DO add validators and correct parameters
module.exports = router => {
  router.get('/offers', validators.find, handlers.find);
  router.post('/offers', validators.create, handlers.create);
  router.get('/offers/:id', validators.find, handlers.findById);
  router.put('/offers/:id', validators.update, handlers.update);
  router.delete('/offers/:id', validators.deletion, handlers.deletion);

  return router;
};
