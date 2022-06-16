const express = require('express');
const mongoose = require('mongoose')
const port = 5000;

const app = express();

app.use(express.json());

mongoose.connect('mongodb://localhost/todos')
    .then(()=>{
        console.log("connect successful")
    })
    .catch((err)=>{
        console.log(err)
    })

app.listen(port, () => {
    console.log("server started")
});