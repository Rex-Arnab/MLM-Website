var express = require('express');
var router = express.Router();
const User = require('../models/user.js');

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
  res.send('test user function');
});
// /user/info
// /user/level
// /user/referel/count
// /user/referel/code
// /user/balance -> show bal
// /user/balance/transfer -> main to activation
// /user/balance/widthdrawl -> to bank

// get user referel code
router.post('/referel/code', function(req, res, next) {
  // get user referel code from database by user id
  User.findOne({ _id: req.body.userId }, function (err, user) {
    if (err) return handleError(err);
    res.send(user.referel_code);
  }
  );
});
// get user referel count
router.get('/referel/count', function(req, res, next) {
  res.send('respond Referel Count');
});
// get user info
router.post('/info', function(req, res, next) {
  // get user info from database by request user id
  User.findOne({ _id: req.body.userId }, function (err, user) {
    if (err) return console.error(err);
    res.send(user);
  }
  );
});
// get user level
router.post('/level', function(req, res, next) {
  User.findOne({ _id: req.body.userId }, function (err, user) {
    if (err) return handleError(err);
    res.send(user.level);
  }
  );
});
// get user balance
router.post('/balance', function(req, res, next) {
  User.findOne({ _id: req.body.userId }, function (err, user) {
    if (err) return handleError(err);
    res.send(user.balance);
  }
  );
});
// get user balance transfer
router.get('/balance/transfer', function(req, res, next) {
  res.send('respond balance transfer');
});
// get user balance withdrawl
router.get('/balance/withdrawl', function(req, res, next) {
  res.send('respond balance widthdrawl');
});

// /user/create/new
// /user/info/bank

router.post('/create/new', function (req, res, next) {
  // get params from request and create new user
  var user = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    balance: req.body.balance,
    level: req.body.level,
    referel_code: req.body.referel_code,
    header_user: req.body.header_user,
    bank: {
      name: req.body.bank_name,
      account_number: req.body.bank_account_number,
      account_type: req.body.bank_account_type,
      account_holder: req.body.bank_account_holder
    }
  });
  // save user to database
  user.save(function (err) {
    if (err) {
      return next(err);
    }
    res.send('User Created');
  });
});


router.get('/info/bank', function (req, res, next) {
  res.send('respond user bank info');
});


module.exports = router;
