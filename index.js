'use strict';

const Koa = require('koa');
const Router = require('@koa/router');
// const render = require('koa-ejs');
// const path = require('path');
const Moment = require('moment');
const bodyParser = require('koa-bodyparser');

const app = new Koa();
const router = new Router();

// middlewares
app.use(bodyParser());

// reference the path of the .json file
const data = require("./data.json");
const data_2 = require("./data_2.json");

// tested this it is running successfully
router.get('/', async (ctx) => {
  ctx.body = data_2
});

// defining an endpoint to return bills with amount greater than 0
router.get('/bill_payments', async (ctx) => {  
  const filterData = await data.bill_payments.filter((bill) => bill.amount > 0);
  ctx.body = {filterData};   
  console.log(filterData);
})

// defining an endpoint to return bills with amount from smallest to greatest
router.get('/bill_payments/sorted-by-amount', (ctx) => {
  data_2.bill_payments.sort((a, b) => {
    return a.amount-b.amount
    });
  ctx.body = {data_2};
})

//defining an endpoint to return bills with property created at from earliest to latest
router.get('/bill_payments/sorted-by-created-at', (ctx) => {
  data_2.bill_payments.sort(
    (a, b) =>
      new Moment(a.created_at).format('X') -
      new Moment(b.created_at).format('X')
 );

  console.log(data_2);
  ctx.body = {data_2};
})  

app
  .use(router.routes())
  .use(router.allowedMethods());
  
app.listen(3000);