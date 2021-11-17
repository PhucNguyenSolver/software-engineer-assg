const express = require('express');
const router = express.Router();
const orderCtrler = require('../business_layer/order')

router.get('/manage-order/:id', orderCtrler.getOrderbyStatus)

router.get('/get-img/:id', orderCtrler.getImgUrlByFoodId)

router.post('/manage-order', orderCtrler.modifyStt)

router.post('/', orderCtrler.saveOrder)

module.exports = router;