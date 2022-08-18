/* 
common js syntax
importing packages
 */

// Requiring module
const express = require('express');

// reference the path of the data.json file
const config = require("./data.json");

const fs = require("fs");

// Creating express app object 
const app = express();

// middlewares
app.use(express.json());

// defining a route
app.get('/', (req, res) => {
    res.send('Bill Payments')
});

// 
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
    const data = await readFile("./data.json")   
    res.json(JSON.parse(data));   
})

// Array#filter() so that only bill payments > 0 appear on the API
const data = [
    {
    "id": "dd57c78e-7d9d-4f5d-ba6b-34587aeed680",
    "created_at": "10 Aug, 2022, 7:11 AM",
    "user_id": "40562a30-2b9d-11ea-b835-255a5f94df01",
    "status": "FAILED",
    "amount": 0,
    "billder_id": "gabaxibox__cabletv__dstv",
    "biller_name": "DSTV",
    "biller_item_id": "gabaxibox__dstv__CTBSCAP0103",
    "biller_item_name": "DStv Compact"
    },
];
    
const filterByAmount = () => data.filter(({ amount }) => amount >0);
console.log("filterByAmount::",filterByAmount())

// port
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on Port: ${port}`));