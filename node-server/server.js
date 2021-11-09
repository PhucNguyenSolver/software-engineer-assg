const express = require("express");
const cors = require("cors");

const foodRouter = require('./app/routers/food.router')

const db = require('./app/models');

const app = express();

var corsOptions = {
    origin: "http://localhost:3000"
};

app.use(cors(corsOptions));
app.use('/food', foodRouter);
app.use(express.json());

db.mongoose
    .connect(db.url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {
        console.log('Mongo Database connected')
    }).catch((err) => {
        console.log('Cannot connect to the Mongo database');
        process.exit();
    })

app.get('/', function (req, res) {
    res.json({
        msg: "Welcome to Đồ án CNPM"
    })
})

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});