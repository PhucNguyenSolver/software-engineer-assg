const express = require('express');
const router = express.Router();
const food = require('../business_layer/food')

router.get('/', food.getOptions)

module.exports = router