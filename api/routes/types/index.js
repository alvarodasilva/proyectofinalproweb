const checkAuth = require('../../middlewares/check-auth.js');
const handlers = require('./handlers');
const validators = require('./validators');

//TO DO add parameters to create
module.exports = router => {
  router.get('/types', checkAuth, validators.find, handlers.find);
  router.get('/types/:id', checkAuth, validators.findOne, handlers.findById);

  return router;
};
