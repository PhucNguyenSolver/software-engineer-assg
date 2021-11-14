const express = require('express');
const router = express.Router();
const Cart = require('../business_layer/cart')

router.get('/', Cart.getCartItems);

module.exports = router;