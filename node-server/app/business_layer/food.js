const db = require('../data_layer')

const getFoodById = async function(req, res) {
    const foodId = req.params.id
    const food = await db.Foods.findById(foodId).exec();
    res.status(200).send(food);
}

const getAllFood = async function(req, res) {
    const food = await db.Foods.find().exec();
    res.status(200).send(food);
}

module.exports = {
    getFoodById,
    getAllFood
}