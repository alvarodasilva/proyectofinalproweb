const Article = require('mongoose').model('Article');
const Type = require('mongoose').model('Type');

const find = (req, res) => {
  const queryCriteria = {};
  const userId = req.userData.user._id;
  const ownedByMe = req.query.owned === '1';
  if (ownedByMe) {
    queryCriteria.user_id = { $eq: userId };
  } else {
    queryCriteria.user_id = { $ne: userId };
  }
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
  let type_name;
  article_data._id = require('uuid/v1')();
  Type.findById(article_data.type_id).then(type => {
    article_data.type_name = type.name;
    Article.create(article_data, function(err, article) {
      if (err != undefined && err != null) {
        res.json({ error: 'Something went really wrong' });
      } else {
        res.json(article);
      }
    });
  });
};

const update = (req, res) => {
  console.log('ID');
  console.log(req.params.id);
  Article.updateOne({ _id: req.params.id }, { $set: req.body }, function(
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
  console.log('DELETING' + req.params.id);
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
