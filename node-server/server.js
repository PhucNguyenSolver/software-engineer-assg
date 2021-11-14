const express = require("express");
const cors = require("cors");

const foodRouter = require('./app/routers/food.router')
const orderRoute = require('./app/routers/order.router')
const loginRoute = require('./app/routers/login.router')


const db = require('./app/data_layer');

const app = express();

var corsOptions = {
    origin: "http://localhost:3000"
};

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors(corsOptions));
app.use(express.json());
app.use('/food', foodRouter);
app.use('/order', orderRoute)
app.use('/login', loginRoute)

db.connect();

app.get('/', function (req, res) {
    res.json({
        msg: "Welcome to BTL CNPM"
    })
})

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});