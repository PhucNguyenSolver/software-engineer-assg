const express = require("express");
const cors = require("cors");
var paypal = require('paypal-rest-sdk');

const db = require('./app/data_layer')
const router = require('./app/routers')
const orderRoute = require('./app/routers/order.router')
const loginRoute = require('./app/routers/login.router')
const paymentRoute = require('./app/routers/payment.router');

const app = express();

var corsOptions = {
    origin: "http://localhost:3000"
};

app.use(cors(corsOptions));
app.use(express.json());

app.use('/food', router.food)
app.use('/cart', router.cart)
app.use('/homepage', router.homepage)
app.use('/banner', router.banner)
app.use('/order', orderRoute)
app.use('/login', loginRoute)
app.use('/payment', paymentRoute);
app.use('/options', router.options)

db.connect();




const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});