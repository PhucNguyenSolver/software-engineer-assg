const homepageRouter = require('./homepage.router')
const foodRouter = require('./food.router')
const cartRouter = require('./cart.router')

function route(app) {
    app.use('/', homepageRouter);
    app.use('/food', foodRouter);
    app.use('/cart', cartRouter);
}

module.exports = route;