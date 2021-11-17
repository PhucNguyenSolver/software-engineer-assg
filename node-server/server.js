const express = require("express");
const cors = require("cors");
var paypal = require('paypal-rest-sdk');

const route = require('./app/routers');
const db = require('./app/data_layer');

const app = express();

var corsOptions = {
    origin: "http://localhost:3000"
};

app.use(cors(corsOptions));
// app.use(cors());

app.use(express.json());


db.connect();

// Routes init
route(app);

app.post('/pay', (req, res) => {
    const create_payment_json = {
      "intent": "sale",
      "payer": {
          "payment_method": "paypal"
      },
      "redirect_urls": {
          "return_url": "http://localhost:8080/success",
          "cancel_url": "http://localhost:8080/cancel"
      },
      "transactions": [{
          "item_list": {
              "items": [{
                  "name": "Redhock Bar Soap",
                  "sku": "001",
                  "price": "25.00",
                  "currency": "USD",
                  "quantity": 1
              }]
          },
          "amount": {
              "currency": "USD",
              "total": "25.00"
          },
          "description": "Washing Bar soap"
      }]
  };
  
  paypal.payment.create(create_payment_json, function (error, payment) {
    if (error) {
        throw error;
    } else {
        for(let i = 0;i < payment.links.length;i++){
          if(payment.links[i].rel === 'approval_url'){
            res.send(payment.links[i].href);
          }
        }
    }
  });
  
  });

  app.get('/success', (req, res) => {
    const payerId = req.query.PayerID;
    const paymentId = req.query.paymentId;
  
    const execute_payment_json = {
      "payer_id": payerId,
      "transactions": [{
          "amount": {
              "currency": "USD",
              "total": "25.00"
          }
      }]
    };
  
  // Obtains the transaction details from paypal
    paypal.payment.execute(paymentId, execute_payment_json, function (error, payment) {
        //When error occurs when due to non-existent transaction, throw an error else log the transaction details in the console then send a Success string reposponse to the user.
      if (error) {
          console.log(error.response);
          throw error;
      } else {
          console.log(JSON.stringify(payment));
          res.redirect("http://localhost:3000/food-info");
      }
  });
  });

app.get('/cancel', (req, res) => res.send('Cancelled'));

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});