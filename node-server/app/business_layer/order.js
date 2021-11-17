const db = require('../data_layer')

const saveOrder = function(req, res) {
    const order = db.Orders(req.body)
    order.save()
}

const getOrderbyStatus = async function(req, res){
    const orderList = await db.Orders.find({status : req.params.id}).exec();
    res.send(orderList)
}

const modifyStt = async function(req, res){
    db.Orders.findByIdAndUpdate({ _id: req.body.orderId }, { status: req.body.sttOrder }).exec();
    const order = await db.Orders.findById({ _id: req.body.orderId }).exec();
    console.log('Hello')
    res.send('Update success')
}

const getImgUrlByFoodId = async function(req, res) {
    const food = await db.Foods.findOne({ _id: req.params.id }, 'imageUrls').exec();
    res.send(food.imageUrls);
}
const acceptAll = async function(req, res){
    db.Orders.updateMany({ status: req.body.statusCurr }, { status: req.body.statusUpdate }).exec();
    // res.send(null)
}

const rejectAll = async function(req, res){
    db.Orders.updateMany({ status: req.body.status }, { status: 'Đã từ chối' }).exec();
    // res.send(null)
}

module.exports = {
    saveOrder,
    getOrderbyStatus,
    modifyStt,
    getImgUrlByFoodId,
    acceptAll,
    rejectAll
}