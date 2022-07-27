const express = require('express');
const router = express.Router();
const restaurantService = require('../services/restaurants');

router.get(
  '/',
  (req, res) => {
    const restaurants = restaurantService.getList();
    res.status(200).send(restaurants);
  }
);

router.get(
  '/:id',
  (req, res) => {
    const restaurants = restaurantService.getById(req.params.id);
    res.status(200).send(restaurants);
  }
);

module.exports = router;