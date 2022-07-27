const express = require('express');
const router = express.Router();
const rateService = require('../services/rate');

router.post(
  '/',
  (req, res) => {
    const rate = rateService.addRate(req.body.id, req.body.rate);
    res.status(200).send(rate);
  }
);

module.exports = router;