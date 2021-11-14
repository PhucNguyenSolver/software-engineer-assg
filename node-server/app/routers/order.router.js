const express = require('express');
const router = express.Router();
const orderCtrler = require('../business_layer/order')


router.post('/', orderCtrler.saveOrder)

module.exports = router;