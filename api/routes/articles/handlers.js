const Article = require('mongoose').model('Article');

const find = (req, res) => {
  const queryCriteria = {};
  const userId = req.userData.user._id;
  const ownedByMe = req.query.owned === '1';
  if (ownedByMe) {
    queryCriteria.user_id = { $eq: userId };
  } else {
    queryCriteria.user_id = { $ne: userId };
  }
  console.log('Query: ' + queryCriteria);
  Article.find(queryCriteria, function(err, articles) {
    if (err != undefined && err != null) {
      res.json({ error: 'Something went really wrong' });
    } else {
      res.json(articles);
    }
  });
};

const findById = (req, res) => {
  Article.findById(req.params.id, function(err, article) {
    if (err != undefined && err != null) {
      res.json({ error: 'Something went really wrong' });
    } else {
      res.json(article);
    }
  });
};

const create = (req, res) => {
  let article_data = req.body;
  article_data._id = require('uuid/v1')();
  Article.create(article_data, function(err, article) {
    if (err != undefined && err != null) {
      res.json({ error: 'Something went really wrong' });
    } else {
      res.json(article);
    }
  });
};

const update = (req, res) => {
  Article.updateOne({ _id: req.params.id }, req.body, function(
    err,
    query_response,
  ) {
    if (err != undefined && err != null) {
      res.json({ error: 'Something went really wrong' });
    } else {
      res.json(query_response);
    }
  });
};

const deletion = (req, res) => {
  Article.deleteOne({ _id: req.params.id }, function(err, query_response) {
    if (err != undefined && err != null) {
      res.json({ error: 'Something went really wrong' });
    } else {
      res.json(query_response);
    }
  });
};

module.exports = {
  create,
  deletion,
  find,
  findById,
  update,
};
