const restaurants = require('../../restaurants.js');
const uid = require("./../helpers/uid.js");
const getFullName = require("./../helpers/getFullName.js");

function addReview(id, review) {
  const restaurant = restaurants.find(item => item.id === +id);
  const data = {
    ...review,
    id: uid(),
    name: getFullName()
  }
  restaurant.reviews.push(data);

  return restaurant.reviews;
}

module.exports = {
  addReview
};