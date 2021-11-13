const express = require('express');
const router = express.Router();
const foodCtrler = require('../business_layer/food')

router.get('/:id', foodCtrler.getFoodById);

module.exports = router;