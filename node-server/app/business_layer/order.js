const db = require('../data_layer')

const saveOrder = function(req, res) {
    const order = db.Orders(req.body)
    order.save()
    console.log("LƯU ORDER : " , order)
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

const acceptAll = async function(req, res){
    db.Orders.updateMany({ status: req.body.statusCurr }, { status: req.body.statusUpdate }).exec();
    // res.send(null)
}

const rejectAll = async function(req, res){
    db.Orders.updateMany({ status: req.body.status }, { status: 'Đã từ chối' }).exec();
    // res.send(null)
}

const getTopOrderedFood = async function(req, res) {
    const topOrderedFood = await db.Orders.aggregate([
        {$project: {_id:0, items:1}},
    ]).unwind('items').group({_id: "$items.name", no: {$sum: 1}}).sort('field -no').limit(8).exec();

    var foods = [];
    for(let i=0; i < topOrderedFood.length; i++) {
        var food = await db.Foods.findOne({name: topOrderedFood[i]._id}).exec();
        if(food) {
            food = food.toObject();
            food.no = topOrderedFood[i].no;
            foods.push(food);
        }
    }
    res.send(foods);
}

module.exports = {
    saveOrder,
    getOrderbyStatus,
    modifyStt,
    acceptAll,
    rejectAll,
    getTopOrderedFood
}