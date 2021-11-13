const { Schema, SchemaTypes } = require('mongoose');

const employees = new Schema({
    identityCard: SchemaTypes.String,
    name: SchemaTypes.String,
    address: SchemaTypes.String,
    phone: SchemaTypes.String,
    avatar: SchemaTypes.String,
    email: SchemaTypes.String
})

const foods = new Schema({
    name: SchemaTypes.String,
    price: SchemaTypes.Number,
    discount: SchemaTypes.String, // 'x%' or number
    imageUrls: [SchemaTypes.String],
    description: SchemaTypes.String,
    optionIds: [SchemaTypes.ObjectId]
})

const options = new Schema({
    name: SchemaTypes.String,
    isMultiSelect: SchemaTypes.Boolean,
    items: [{
        name: SchemaTypes.String,
        price: SchemaTypes.Number
    }]
})

const categories = new Schema({
    name: SchemaTypes.String
})

const orders = new Schema({
    customerInfo: {
        name: SchemaTypes.String,
        address: SchemaTypes.String,
        phone: SchemaTypes.String
    },
    shipFee: SchemaTypes.Number,
    items: [{
        foodId: SchemaTypes.ObjectId,
        price: SchemaTypes.Number,
        discount: SchemaTypes.String, // 'x%' or number
        quantity: SchemaTypes.Number
    }]
}, {
    timestamps: {
        createdAt: true,
        updatedAt: false
    }
})

module.exports = {
    employees,
    options,
    orders,
    categories,
    foods
}