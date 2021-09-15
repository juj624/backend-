const express = require('express');
const dotenv = require('dotenv');
dotenv.config({
    path: ".config.env"
});

const mongoose = require('mongoose');
const app = express();

app.use(express.json());

mongoose.connect(precess.prev.DB,{
    useNewUrlParser: true,
})
.then(()=>{
    console.log("Connected to MongoDB !");
})