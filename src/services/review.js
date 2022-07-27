const restaurants = require('../../restaurants.js');

function addReview(id, review) {
  const restaurant = restaurants.find(item => item.id === id);
  restaurant.reviews.push(review);

  return restaurant.reviews;
}

module.exports = {
  addReview
};