var express = require('express');
var router = express.Router();

router.get("member/count", function (req, res, next) {
    res.json({ title: "member/count" });
});

module.exports = router;
