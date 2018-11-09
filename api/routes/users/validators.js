const { celebrate, Joi } = require('celebrate');

const find = celebrate({
  query: {
    name: Joi.string(),
    mail: Joi.string(),
    limit: Joi.number(),
  },
});

const findOne = celebrate({
  params: {
    id: Joi.string().guid(),
  },
});

const create = celebrate({
  query: {
    name: Joi.string().strict(),
  },
});

module.exports = {
  find,
  findOne,
  create,
};
