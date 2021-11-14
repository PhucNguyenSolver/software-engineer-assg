const dbConfig = require('../config/db.config');
const PosSchema = require('./db.model');

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

// db = {}
// db.connect = mongoose.connect;
// db.uri = dbConfig.uri;
class Database {
    #uri;
    constructor(uri) {
        this.#uri = uri
    }
    Foods = mongoose.model('Foods', PosSchema.foods)
    Categories = mongoose.model('Categories', PosSchema.categories)
    Employees = mongoose.model('Employees', PosSchema.employees)
    Orders = mongoose.model('Orders', PosSchema.orders)
    Options = mongoose.model('Options', PosSchema.options);
    connect = () => {
        mongoose.connect(this.#uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }).then(() => {
            console.log('Mongo Database connected');
        }).catch((err) => {
            console.log('Cannot connect to the Mongo database');
            console.log(err)
            process.exit();
        })
    }
}

module.exports = new Database(dbConfig.uri);