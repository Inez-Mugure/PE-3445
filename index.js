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

app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(3000);