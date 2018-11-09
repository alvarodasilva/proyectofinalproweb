const handlers = require('./handlers');
const validators = require('./validators');

//TO DO add parameters to create
module.exports = router => {
  router.get('/types', validators.find, handlers.find);
  router.get('/types/:id', validators.findOne, handlers.findById);

  return router;
};
