const express = require('express');
const router = express.Router();

router.get('/', function (req, res) {
    res.json({
        msg: "Welcome to BTL CNPM"
    })
})

module.exports = router;