const { celebrate, Joi } = require('celebrate');

//TO DO add correct validators for each one, add the ones remaining
const find = celebrate({
  query: {
    limit: Joi.number(),
  },
});

const findOne = celebrate({
  params: {
    id: Joi.number(),
  },
});

const create = celebrate({
  query: {
    name: Joi.string().strict(),
  },
});

module.exports = {
  create,
  find,
  findOne,
};
