const db = require('../data_layer')
const ObjectId = require('mongoose').Types.ObjectId;

const x = [{
    id: 1,
    imgUrl: './chicken.png',
    name: 'Đùi gà rán',
    sideDish: 'Tuỳ chọn: Thêm gà :), thêm nhiều gà =)), thêm nhiều nhiều gà ^^',
    price: 49000,
    quantity: 1,
    active: false
}]

const getCartItems = async function (req, res) {
    let preItemIds = JSON.parse(req.query.list)
    // Some id may not have type ObjectId of Mongo, hence must filter valid id value
    // NOTE: in aggregation, we must use SchemaType of value exactly 
    // (It's hard to debug because of JS dynamic type)
    let validItemIds = preItemIds.filter(value =>
        ObjectId.isValid(value)
    ).map(value => ObjectId(value.toString()))

    try {
        const items = await db.Foods.aggregate([
            { $match: { "_id": { $in: validItemIds } } },
            {
                $lookup: {
                    from: 'options',
                    localField: 'optionIds',
                    foreignField: '_id',
                    as: 'options'
                }
            },
            { $project: { 'optionIds': 0 } }
        ])
        // fs.writeFile('./cartDataSample.json', JSON.stringify(items), () => {});
        res.status(200).send(items)
    }
    catch (err) {
        console.log(err);
        res.status(500).send({ msg: err.code })
    }
}

module.exports = {
    getCartItems
}