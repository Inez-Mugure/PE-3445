/* 
common js syntax
importing packages
 */

// Requiring module
const express = require('express');

// reference the path of the data.json file
const data = require("./data.json");

const fs = require("fs");

// Creating express app object 
const app = express();

// middlewares
app.use(express.json());

// defining a route
app.get('/', (req, res) => {
    res.send('Bill Payments')
});

// read and write json file using fs
const readFile = async filePath => {
    try {
      const data = await fs.promises.readFile(filePath, 'utf8')
      console.log("jsonData", data)
      return data
    }
    catch(err) {
      console.log(err)
    }
  }

// Interact with files with fs
app.get('/api/bill_payments', async (req, res) => {  
    const filterData = data.bill_payments.filter((bill) => bill.amount > 0);
    res.json((filterData));   
})

// port
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on Port: ${port}`));