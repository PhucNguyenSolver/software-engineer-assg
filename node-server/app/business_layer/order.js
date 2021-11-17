const db = require('../data_layer')

const saveOrder = function(req, res) {
    const order = db.Orders(req.body)
    order.save()
    console.log(req.body)
}

const getAllOrder = async function(req, res){
    const orderList = await db.Orders.find().exec();
    res.send(orderList)
}

module.exports = {
    saveOrder,
    getAllOrder
}