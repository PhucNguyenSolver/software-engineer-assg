const express = require('express');
const router = express.Router();
const bannerController = require('../business_layer/banner')

router.get('/', bannerController.getBanner);

module.exports = router;