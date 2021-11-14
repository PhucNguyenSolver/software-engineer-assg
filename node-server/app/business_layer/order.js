const db = require('../data_layer')

const saveOrder = function(req, res) {
    const order = db.Orders(req.body)
    order.save()
    console.log(req.body)
}

module.exports = {
    saveOrder
}