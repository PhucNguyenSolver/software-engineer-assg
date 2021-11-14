const express = require("express");
const cors = require("cors");

const route = require('./app/routers');
const db = require('./app/data_layer');

const app = express();

var corsOptions = {
    origin: "http://localhost:3000"
};

app.use(cors(corsOptions));
app.use(express.json());

db.connect();

// Routes init
route(app);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});