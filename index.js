/* 
common js syntax
importing packages
 */

// Require the koa package 
const Koa = require('koa');
const Router = require('@koa/router');
const bodyParser = require('koa-bodyparser');
const Moment = require('moment');

// Set up the koa app - create a Koa application instance using the constructor and new keyword
const app = new Koa();
const router = new Router(); 

// middlewares
app.use(bodyParser());

// the parsed body will store in ctx.request.body
// if nothing was parsed, body will be an empty object {}
app.use(async (ctx) => {
  ctx.body = ctx.request.body;
});

// reference the path of the .json file
const data = require("./data.json");
const data_2 = require("./data_2.json");

// defining a route
router.get('PE-3445', '/', (ctx) => {
    ctx.body('Bill Payments')
});

// testing endpoint
router.get('router/test', (ctx) => {
    ctx.body('Hello World, from express');
})

// defining an endpoint to return bills with amount greater than 0
router.get('router/bill_payments', (ctx) => {  
    const filterData = data.bill_payments.filter((bill) => bill.amount > 0);
    ctx.body((filterData));   
})

// defining an endpoint to return bills with amount from smallest to greatest
router.get('router/bill_payments/sorted-by-amount', (ctx) => {
  data_2.bill_payments.sort((a, b) => {
    return a.amount-b.amount
    });
  ctx.body((data_2));
})

//defining an endpoint to return bills with property created at from earliest to latest
router.get('router/bill_payments/sorted-by-created-at', (ctx) => {
  data_2.bill_payments.sort(
    (a, b) =>
      new Moment(a.created_at).format('X') -
      new Moment(b.created_at).format('X')
  );
  console.log(data_2);
  ctx.body((data_2));

app.use(router.routes())
  
// port
app.listen(3000, function(){
   console.log('Server running on https://localhost:3000')
});
});