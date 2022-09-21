<!-- 
Notes
npm install -D nodemon: installed nodemon as a developer dependency because my server code will not depend on it.
alternative [ES6] syntax to import express
import express from 'express'; 
-->
# Build a REST API using Node JS and Express

This assessment was to cover lessons learnt from the Git and Javascript learning path.
## Project Description

assessment #1

- create an endpoint called bill_payments
- filter the json data to only show bill payments with amount > 0
- The expected file path is http://localhost:3000/bill_payments

assessment #2

- create a 2nd endpoint called that returns bills with amount from smallest to greatest
- the expected file path is http://localhost:3000/bill_payments/sorted-by-amount

assessment #3

- create an endpoint that returns bills with property created at from earliest to latest
- use moment.js for this task
- the expected file path is http://localhost:3000/bill_payments/sorted-by-created-at

assessment #4
- migrate the application from express to koa
- tested the endpoint here http://localhost:3000/ 
## Installation

- dev dependency: nodemon
- install moment
- install koa
- install koa router
- install koa ejs
