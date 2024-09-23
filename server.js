const express = require("express");

const dp = require('./config/db');

const app = express();

const userController = require('./controllers/userController');

app.get('/', (req, res)=>{
    res.send("Hello World !!");
})

app.get('/users', userController.getAllUsers);

app.listen(3000, ()=>{
    console.log("Server running at port 3000");
})