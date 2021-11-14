const db = require('../data_layer')

const getCartItems = function(req, res) {
    res.send(req.query)
}

module.exports = {
    getCartItems
}