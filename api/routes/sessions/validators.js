const { celebrate, Joi } = require('celebrate');

const create = celebrate({
  query: {
    name: Joi.string().strict(),
  },
});

module.exports = {
  create,
};
