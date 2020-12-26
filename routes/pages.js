const express = require("express");
const router = express.Router();

router.get("/", (req, res) => { 
  res.render("home"); 
});

router.get("/register", (req, res) => { 
  res.render("register"); 
});
router.get("/login", (req, res) => { 
  res.render("login"); 
});
router.get("/student", (req, res) => { 
  var studentid = req.query.id;
  var studentname = req.query.name;
  res.render("student", {studentname: studentname}); 
});
router.get("/admin", (req, res) => { 
  res.render("admin"); 
});
router.get("/admin2", (req, res) => { 
  var message = "";
  res.render("admin2",{message: message}); 
});
router.get("/sample", (req, res) => { 
  res.render("sample"); 
});

module.exports = router;

