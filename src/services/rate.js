const restaurants = require('../../restaurants.js');
const rateCalculator = require('../helpers/rateCalculator');

function addRate(id, rate) {
  const restaurant = restaurants.find(item => item.id === id);
  restaurant.rates.push(rate);

  return rateCalculator(restaurant.rates);
}

module.exports = {
  addRate
}