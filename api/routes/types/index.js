const handlers = require('./handlers');
const validators = require('./validators');

//TO DO add parameters to create
module.exports = router => {
  router.get('/types', handlers.create);

  return router;
};