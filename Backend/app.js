const express = require('express');
// create express app
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');

app.use(bodyParser.json());

const storeRoute = require('./src/routes/store.posts');
const productRoute = require('./src/routes/product.post');
const orderRoute = require('./src/routes/order.post');
const archiveRoute = require('./src/routes/archive.post');

app.use('/order',orderRoute);
app.use('/store',storeRoute);
app.use('/product',productRoute);
app.use('/archive',archiveRoute);

//define root route
app.get('/',(req,res)=>{
    res.send('hello world');
});

//connect to DB
mongoose.connect(process.env.DB_CONNECTION,()=>{
    console.log('connected to DB !!');
})

//listen to the port
app.listen(process.env.port || 3000,function(){
    console.log('Now listening for requests')
});