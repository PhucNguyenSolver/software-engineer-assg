const express = require('express');
const router = express.Router();
const food = require('../business_layer/food')

router.get('/:id', food.getFoodById);
router.get("/detail/:id", food.getFoodDetailById);
router.post('/new', food.createFood)

router.get('/', food.getAllFood);
router.put('/:id', food.updateFood)
router.delete('/:id', food.deleteFood)


module.exports = router;