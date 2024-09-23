// mysql connect with express app

const mysql = require("mysql2");

const db = mysql.createConnection({

    host : 'localhost',
    user : 'root',
    password : 'root',
    database : 'mydb1'
})

db.connect((err)=>{
    if(err) throw err;

    console.log("Connected with mysql database");
})

module.exports = db;