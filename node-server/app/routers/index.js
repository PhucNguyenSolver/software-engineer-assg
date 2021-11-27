const food = require('./food.router')
const cart = require('./cart.router')
const homepage = require('./homepage.router')
const banner = require('./banner.router')
const payment = require('./payment.router');
const options = require('./option.router')

module.exports = {
    food, cart,
    homepage,
    banner,
    payment,
    options
}
