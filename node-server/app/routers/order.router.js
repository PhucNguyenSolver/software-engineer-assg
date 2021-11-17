const express = require('express');
const router = express.Router();
const orderCtrler = require('../business_layer/order')

router.get('/manage-order/:id', orderCtrler.getOrderbyStatus)

router.get('/get-img/:id', orderCtrler.getImgUrlByFoodId)
// router.get('/manage-order', orderCtrler.getOrderbyStatus)
router.post('/manage-order/accept', orderCtrler.acceptAll)

router.post('/manage-order/reject', orderCtrler.rejectAll)

router.post('/manage-order', orderCtrler.modifyStt)

router.post('/', orderCtrler.saveOrder)

module.exports = router;