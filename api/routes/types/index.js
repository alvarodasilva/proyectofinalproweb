const handlers = require('./handlers');

//TO DO add parameters to create
module.exports = router => {
  router.get('/types', handlers.create);

  return router;
};
