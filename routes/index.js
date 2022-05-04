var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index');
});
router.get('/login', function(req, res) {
  res.render('login');
});
router.get('/profile', function(req, res) {
  res.render('profile');
});
router.post('/reg' , function(req , res) {

}) 
  

module.exports = router;
