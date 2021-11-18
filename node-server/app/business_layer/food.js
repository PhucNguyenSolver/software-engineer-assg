const db = require('../data_layer')
var paypal = require('paypal-rest-sdk');

paypal.configure({
    'mode': 'sandbox', //sandbox or live
    'client_id': 'AdtWJe_iauGK_BYkayDGxnJkFwlpzGcjX7n6pLG7rbZAD87T9kyoSJD6N2RYnpHTpyNNdpe3E0tU5HqL',
    'client_secret': 'ENJeGQ5ctfVzIjeqMBUCLlJZDdFhShCOWvy_ZL5YiwYd0Ge3Gg1siDR81rS2FjW86Ceu2YcS05_5lg2C'
});

const getFoodById = async function(req, res) {
    console.log("GET food by ID");
    const foodId = req.params.id
    const food = await db.Foods.findById(foodId).exec();
    console.log(food);
    res.status(200).send(food);
}

const getFoodDetailById = async function (req, res) {

    const foodId = req.params.id;
    var food = await db.Foods.findById(foodId);
    food = food.toObject();
    food.orderOptions = [];
    for(let i = 0; i < food.optionIds.length; i++) {
        var option = await db.Options.findById(food.optionIds[i]);
        option = option.toObject();
        option.options = option.items.map((item) => {
            return item.name;
        })
        
        option.price = option.items.map((item) => {
            return item.price;
        })

        option.answer = option.items.map((item, idx) => {return false});
        if(!option.isMultiSelect) {
            option.answer[0] = true;
        }

        delete option.items;

        option.title = option.name;
        delete option.name;
        food.orderOptions[i] = option;

    }
    food.images = food.imageUrls;
    delete food.imageUrls;

    food.unitPrice = food.price;
    delete food.price;

    food.description = "Thật là ngon"
    res.status(200).send(food);
}

const payFood = async function(req, res) {
    var create_payment_json = {
        "intent": "sale",
        "payer": {
            "payment_method": "paypal"
        },
        "redirect_urls": {
            "return_url": "http://localhost:3000/success",
            "cancel_url": "http://localhost:3000/cancel"
        },
        "transactions": [{
            "item_list": {
                "items": [{
                    "name": "Hat",
                    "sku": "002",
                    "price": "2.00",
                    "currency": "USD",
                    "quantity": 1
                }]
            },
            "amount": {
                "currency": "USD",
                "total": "2.00"
            },
            "description": "This is the payment description."
        }]
    };
    
    
    paypal.payment.create(create_payment_json, function (error, payment) {
        if (error) {
            res.status(404).send(error);
        } else {
            for(let i = 0;i < payment.links.length;i++){
                if(payment.links[i].rel === 'approval_url'){
                  res.redirect(payment.links[i].href);
                }
              }
        }
    });
    
}

const getAllFood = async function(req, res) {
    const food = await db.Foods.find().exec();
    res.status(200).send(food);
}
module.exports = {
    getFoodById,
    getFoodDetailById,
    payFood,
    getAllFood
}
