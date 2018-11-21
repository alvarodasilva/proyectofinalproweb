const { celebrate, Joi } = require('celebrate');

const find = celebrate({
  query: {
    user_id: Joi.string(),
    bidder_id: Joi.string(),
    article_id: Joi.string(),
    status: Joi.string(),
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

const update = celebrate({ query: { limit: Joi.number() } });
const deletion = celebrate({ query: { limit: Joi.number() } });

module.exports = {
  find,
  findOne,
  create,
  update,
  deletion,
};
