var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
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
  res.send('respond with a resource');
});
// get user referel count
router.get('/referel/count', function(req, res, next) {
  res.send('respond with a resource');
});
// get user info
router.get('/info', function(req, res, next) {
  res.send('respond with a resource');
});
// get user level
router.get('/level', function(req, res, next) {
  res.send('respond with a resource');
});
// get user balance
router.get('/balance', function(req, res, next) {
  res.send('respond with a resource');
});
// get user balance transfer
router.get('/balance/transfer', function(req, res, next) {
  res.send('respond with a resource');
});
// get user balance withdrawl
router.get('/balance/withdrawl', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
