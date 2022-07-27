const express = require('express');
const router = express.Router();
const reviewService = require('../services/review');

router.post(
  '/',
  (req, res) => {
    const restaurants = reviewService.addReview(req.body.id, req.body.message);
    res.status(200).send(restaurants);
  }
);

module.exports = router;