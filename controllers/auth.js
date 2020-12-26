const mysql = require("mysql");
const session = require('express-session');
const express = require("express");

const imgmutler = require("../controllers/upload.js");
const upload = require("../controllers/upload.js");

const db = mysql.createConnection({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
 database: process.env.DATABASE
});

const app = express();

app.use(session({
  secret: 'nodesql',
  resave: false,
  saveUninitialized: true,
}));

exports.register = (req, res) => {

  // const name = req.body.name;
  // const email = req.body.email;
  // const password = req.body.password;
  const { regno, name, email, password, phone } = req.body;
  db.query('INSERT INTO users SET ?', { regno: regno, name: name, email: email, password: password, phone: phone }, (err, results) => {
    if (err) {
      console.log(err);
    } else {

      return res.render("admin2", { message: "User Registered" });
    }
  });

}

exports.login = (req, res) => {
  try {
    const { regno, password } = req.body;
    if (regno === "admin" && password === "admin") {
      return res.redirect("/admin");
    } else {
      db.query('SELECT * FROM users WHERE regno = ?', [regno], (err, results) => {
        if (err) {
          console.log(err);
        } else {
          if (results[0].password === password) {
            // req.session.user = "asdadsdds";
            // console.log(req.session.user);
            var userid = encodeURIComponent(results[0].regno);
            var username = encodeURIComponent(results[0].name);
            return res.redirect("/student?id="+userid+"&name="+username);
          } else {
            return res.render("login", { message: "Password Incorrect" });
          }
        }
  
      });
    }
    
  } catch (error) {
    console.log(error);
  }
 };