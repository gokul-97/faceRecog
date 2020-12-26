require('dotenv').config();
const { urlencoded } = require('express');
const express = require("express");
const mysql = require("mysql");
const session = require('express-session');


const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use("/", require("./routes/pages"));
app.use("/auth", require("./routes/auth"));

app.set("view engine", "ejs");
app.use(session({
    secret: 'nodesql',
    resave: false,
    saveUninitialized: true,
}));

const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
   database: process.env.DATABASE
});

db.connect(function(err) {
    if (err) {
        console.log(err);
    } else {
        console.log("mysql is connected");
    }
});
  
app.listen(3000, () => {
   console.log("Server started at port 3000"); 
});