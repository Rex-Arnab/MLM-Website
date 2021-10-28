var express = require('express');
var router = express.Router();

// Connect with MongoDB database and check if connection is successful
var mongoose = require('mongoose');
mongoose.connect('mongodb+srv://test:test@cluster0.13frr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('Connected to MongoDB database');
});

    
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond User Function');
});
// /user/info
// /user/level
// /user/referel/count
// /user/referel/code
// /user/balance -> show bal
// /user/balance/transfer -> main to activation
// /user/balance/widthdrawl -> to bank

// get user referel code
router.get('/referel/code', function(req, res, next) {
  res.send('respond Referal code');
});
// get user referel count
router.get('/referel/count', function(req, res, next) {
  res.send('respond Referel Count');
});
// get user info
router.get('/info', function(req, res, next) {
  res.send('respond user info');
});
// get user level
router.get('/level', function(req, res, next) {
  res.send('respond user level');
});
// get user balance
router.get('/balance', function(req, res, next) {
  res.send('respond balance');
});
// get user balance transfer
router.get('/balance/transfer', function(req, res, next) {
  res.send('respond balance transfer');
});
// get user balance withdrawl
router.get('/balance/withdrawl', function(req, res, next) {
  res.send('respond balance widthdrawl');
});

module.exports = router;
