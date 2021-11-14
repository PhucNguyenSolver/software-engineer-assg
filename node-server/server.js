const express = require("express");
const cors = require("cors");

const foodRouter = require('./app/routers/food.router')
const cartRouter = require('./app/routers/cart.router')

const db = require('./app/data_layer');

const app = express();

var corsOptions = {
    origin: "http://localhost:3000"
};

app.use(cors(corsOptions));
app.use('/food', foodRouter);
app.use('/cart', cartRouter)
app.use(express.json());

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