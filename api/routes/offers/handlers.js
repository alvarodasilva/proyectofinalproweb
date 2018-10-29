// TO DO implement create code, to create an offer,
// receives two articleIDs
const create = (req, res) => res.json({ name: 'Create offer' });

// TO DO implement find code, to return all offers
const find = (req, res) => res.json({ name: 'Return all offers' });

// TO DO implement userOffers code, to return an array
// of offers of a specific user, receives userID
const userOffers = (req, res) =>
  res.json({ name: 'Return offers of a user - ' });

module.exports = {
  create,
  find,
  userOffers,
};
