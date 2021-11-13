const express = require('express');
const router = express.Router();
const foodCtrler = require('../controller/food.controller')

router.get('/:id', foodCtrler.getFoodById);

module.exports = router;