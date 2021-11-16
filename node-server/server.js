const express = require("express");
const cors = require("cors");

const db = require('./app/data_layer')
const router = require('./app/routers')

const app = express();

var corsOptions = {
    origin: "http://localhost:3000"
};

app.use(cors(corsOptions));
app.use(express.json());

app.use('/food', router.food)
app.use('/cart', router.cart)
app.use('/homepage', router.homepage)

db.connect();

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});