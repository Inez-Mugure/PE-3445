/* 
common js syntax
importing packages
 */

// Requiring module
const express = require('express');

// reference the path of the .json file
const data = require("./data.json");
const data_2 = require("./data_2.json");

// Set up the express app 
const app = express();

// middlewares
app.use(express.json());

// defining a route
app.get('/', (req, res) => {
    res.send('Bill Payments')
});

// testing endpoint
app.get('/api/bill_payments/test', async (req, res) => {
    res.send('Hello World, from express');
})

// defining an endpoint to return bills with amount greater than 0
app.get('/api/bill_payments', async (req, res) => {  
    const filterData = data.bill_payments.filter((bill) => bill.amount > 0);
    res.json((filterData));   
})

// defining an endpoint to return bills with amount from smallest to greatest
app.get('/api/bill_payments/sorted-by-amount', async (req, res) => {
  data_2.bill_payments.sort((a, b) => {
    return a.amount-b.amount
    });
  res.json((data_2));
})

//defining an endpoint to return bills with property created at from earliest to latest
app.get('/api/bill_payments/sorted-by-created-at', async (req, res) => {
    data_2.bill_payments.sort((a, b) => {
      return new Date(a.created_at).getTime() - new Date (b.created_at).getTime()
    });
    res.json((data_2));
})

// port
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on Port: ${port}`));