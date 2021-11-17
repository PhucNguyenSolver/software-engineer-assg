const express = require('express');
const router = express.Router();
const foodController = require('../business_layer/food')

router.get('/:id', foodController.getFoodById);
router.get("/detail/:id", foodController.getFoodDetailById);
router.post("/payment", foodController.payFood);

router.get('/', foodController.getAllFood);

module.exports = router;