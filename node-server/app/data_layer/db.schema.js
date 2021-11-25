const { Schema, SchemaTypes } = require('mongoose');

const employees = new Schema({
    account : { type : String },
    password : { type : String }
})

const foods = new Schema({
    name: SchemaTypes.String,
    price: SchemaTypes.Number,
    discount: SchemaTypes.String, // 'x%' or number
    imageUrls: [SchemaTypes.String],
    description: SchemaTypes.String,
    optionIds: [SchemaTypes.ObjectId],
    type: SchemaTypes.String
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
        phone: SchemaTypes.String,
        district : SchemaTypes.String,
        ward : SchemaTypes.String,
        typeOrder : SchemaTypes.String, 
    },
    shipFee: SchemaTypes.Number,
    status : { type : SchemaTypes.String, default : 'Đang chờ xử lý'},
    items: [{
        options: SchemaTypes.String,
        name : SchemaTypes.String,
        imageUrl: SchemaTypes.String,
        price: SchemaTypes.Number,
        // discount: SchemaTypes.String, // 'x%' or number
        quantity: SchemaTypes.Number
    }]
}, {
    timestamps: {
        createdAt: true,
        updatedAt: false
    }
})

const banner = new Schema({
    imageUrls: [SchemaTypes.String]
})

module.exports = {
    employees,
    options,
    orders,
    categories,
    foods,
    banner
}
