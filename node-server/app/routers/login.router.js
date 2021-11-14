const express = require('express');
const router = express.Router();
const loginCtrler = require('../business_layer/login')


router.post('/', loginCtrler.checkLogin)

module.exports = router;