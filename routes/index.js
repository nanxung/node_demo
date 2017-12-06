var express = require('express');
var router = express.Router();
var fun = require('./a');
console.log(fun)

/* GET home page. */
router.get('/:num', function(req, res, next) {
    var num = req.params.num;
    var cookie = fun.getCookie(num);
    var key = fun.getKey(num);
    res.send({
        cookie: cookie,
        key: key
    });
});

module.exports = router;