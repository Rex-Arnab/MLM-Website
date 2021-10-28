var express = require('express');
const { route } = require('.');
var router = express.Router();

router.get('/whatsapp', function (req, res, next) {
    res.json({ title: 'Whatsapp', code: 'k2sadx2x' });
});

router.get('/facebook', function (req, res, next) {
    res.json({ title: 'facebook' });
});

router.get('/instagram', function (req, res, next) {
    res.json({ title: 'instagram' });
});

router.get('/twitter', function (req, res, next) {
    res.json({ title: 'Whatsapp' });
});

router.get('/linkedin', function (req, res, next) {
    res.json({ title: 'linkedin' });
});

module.exports = router;
