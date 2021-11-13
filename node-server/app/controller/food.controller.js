const db = require('../models')

const getFoodById = async function(req, res) {
    const foodId = req.params.id
    const food = await db.Foods.find({}).exec();
    res.status(200).send(food);
}

module.exports = {
    getFoodById
}