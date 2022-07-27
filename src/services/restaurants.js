const restaurants = require('../../restaurants.js');
const rateCalculator = require('../helpers/rateCalculator');

function getList() {
  return restaurants.sort((a,b) => {
    return rateCalculator(a.rates) > rateCalculator(b.rates) ? -1 : 1;
  });
}

function getById(id) {
  return restaurants.find(item => item.id === +id);
}

module.exports = {
  getList,
  getById
};