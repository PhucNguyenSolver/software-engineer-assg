const db = require('../data_layer')

const saveOrder = function(req, res) {
    const order = db.Orders(req.body)
    order.save()
    console.log(req.body)
}

const getOrderbyStatus = async function(req, res){
    // console.log(req.params.id === 'Đang giao hàng')
    const orderList = await db.Orders.find({status : req.params.id}).exec();
    console.log(orderList)
    res.send(orderList)
}

const modifyStt = async function(req, res){
    db.Orders.findByIdAndUpdate({ _id: req.body.orderId }, { status: req.body.sttOrder }).exec();
    const order = await db.Orders.findById({ _id: req.body.orderId }).exec();
    console.log(order.status)
    res.send('Update success')
}

const getImgUrlByFoodId = async function(req, res) {
    const food = await db.Foods.findOne({ _id: req.params.id }, 'imageUrls').exec();
    res.send(food.imageUrls);
}

module.exports = {
    saveOrder,
    getOrderbyStatus,
    modifyStt,
    getImgUrlByFoodId,
}