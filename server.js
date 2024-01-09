const express = require('express');
const bodyparser = require('body-parser');
const db = require('./db');
const contract_router = require('./routes/contract/contracts.router');
const app = express();
db.query("SELECT 1")
.then(data=>console.log("db connection succeded"))
.catch(err=>console.log('db connection failed'));
app.use(bodyparser.json());
app.use(contract_router);
app.listen(8800,()=>{
    console.log('Listening to backend');
})
module.exports = app;

