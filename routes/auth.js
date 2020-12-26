const express = require("express");
const authcontrollers = require("../controllers/auth.js");
const router = express.Router();
var multer = require('multer');
const fs = require('fs');



router.post("/register", authcontrollers.register);
router.post("/login", authcontrollers.login);

//Multer function image
var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const { userId } = req.body
    const dir = `./public/uploads/${userId}`
    fs.access(dir, function (error) {
      if (error) {
        console.log("Directory does not exist.");
        return fs.mkdir(dir, (error) => cb(error, dir));
      } else {
        console.log("Directory exists.");
        return cb(null, dir);
      }
    });
  },
  filename: function (req, file, callback) {
    callback(null, file.originalname);
  }
});

var upload = multer({ storage: storage }).array('img', 2);


router.post('/imgUpload', function (req, res) {
  console.log("post method");
  log
  upload(req, res, function (err) {
     
      console.log(req.body);
      console.log(req.files);
      if(err) {
          return console.log("Error uploading file.");
      }
      console.log("File is uploaded");
  });
});


module.exports = router;

