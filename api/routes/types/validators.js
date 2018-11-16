const { celebrate, Joi } = require('celebrate');

const find = celebrate({
  query: {
    name: Joi.string(),
    description: Joi.string(),
    limit: Joi.number(),
  },
});

const findOne = celebrate({
  params: {
    id: Joi.string().guid(),
  },
});

module.exports = {
  find,
  findOne,
};
