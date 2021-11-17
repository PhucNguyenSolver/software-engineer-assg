const express = require('express');
const router = express.Router();
const cartController = require('../business_layer/cart')

router.get('/', cartController.getCartItems);

module.exports = router;