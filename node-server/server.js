const express = require("express")
const cors = require("cors")

const db = require('./app/data_layer')
const foodRouter = require('./app/routers/food.router')
const cartRouter = require('./app/routers/cart.router')

const app = express()

var corsOptions = {
    origin: "http://localhost:3000"
}

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors(corsOptions))

app.use('/food', foodRouter)
app.use('/cart', cartRouter)

db.connect()

app.get('/', function (req, res) {
    res.json({
        msg: "Welcome to BTL CNPM"
    })
})

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
})