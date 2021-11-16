const express = require('express');
const router = express.Router();
const orderCtrler = require('../business_layer/order')

router.get('/manage-order', orderCtrler.getAllOrder)

router.post('/', orderCtrler.saveOrder)

module.exports = router;