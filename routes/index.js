const express = require("express");
const passport = require("passport");
const router = express.Router();
const userModel = require("./users");
// const postModel = require('./post')
const { body, validationResult } = require('express-validator');

const data = new userModel()

const localStrategy = require("passport-local");
passport.use(new localStrategy(userModel.authenticate()));

/* GET home page. */
router.get("/", function (req, res) {
  res.render("index",{errors:false});
});


router.get("/profile",isLoggedIn ,function (req, res) {
  userModel.findOne({username:req.session.passport.user})
  .then(function(user){
    res.render('profile',{user});
  })
});



router.get("/logout", function (req, res) {
  req.logOut();
  res.redirect("/");
});



function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  } else {
    res.redirect("/login");
  }
}



module.exports = router;
