const express = require('express');
const router = express.Router();
const orderCtrler = require('../business_layer/order')

router.get('/manage-order/:id', orderCtrler.getOrderbyStatus)

// router.get('/manage-order', orderCtrler.getOrderbyStatus)

router.post('/manage-order', orderCtrler.modifyStt)

router.post('/', orderCtrler.saveOrder)

module.exports = router;