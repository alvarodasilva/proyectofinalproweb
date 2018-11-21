const Offer = require('mongoose').model('Offer');

const find = (req, res) => {
  Offer.find(req.query, function(err, offers) {
    if (err != undefined && err != null) {
      res.json({ error: 'Something went really wrong' });
    } else {
      res.json(offers);
    }
  });
};

const findById = (req, res) => {
  Offer.findById(req.params.id, function(err, offer) {
    if (err != undefined && err != null) {
      res.json({ error: 'Something went really wrong' });
    } else {
      res.json(offer);
    }
  });
};

const create = (req, res) => {
  let offer_data = req.body;
  offer_data._id = require('uuid/v1')();
  Offer.create(offer_data, function(err, offer) {
    if (err != undefined && err != null) {
      res.json({ error: 'Something went really wrong' });
    } else {
      res.json(offer);
    }
  });
};

const update = (req, res) => {
  console.log(req.params.id);
  console.log('putas');
  Offer.updateOne({ _id: req.params.id }, { $set: req.body }, function(
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
  Offer.deleteOne({ _id: req.params.id }, function(err, query_response) {
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
