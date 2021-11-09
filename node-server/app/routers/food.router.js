const express = require('express');
const router = express.Router();
const foodCtrler = require('../controller/food.controller')

router.get('/', foodCtrler.getFood);

module.exports = router;