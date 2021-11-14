const homeRouter = require('./homepage.router');
const foodRouter = require('./food.router');

function route(app) {
    app.use('/', homeRouter);
    app.use('/food', foodRouter);
}

module.exports = route;