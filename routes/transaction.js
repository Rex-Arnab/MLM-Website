var express = require('express');
var router = express.Router();

// Get Transaction history from request id
router.get('/:request_id', function (req, res, next) {
    var request_id = req.params.request_id;
    var db = req.db;
    var collection = db.get('transaction');
    collection.find({ request_id: request_id }, {}, function (e, docs) {
        res.json(docs);
    });
});



module.exports = router;
