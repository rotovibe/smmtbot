var express = require('express');
var router = express.Router();
var parser = require('../model/Parser.js');
var HTTPS = require('https');
const botId = process.env.BOT_ID || '157dc81a5fdbd01f3e3ea37d1b';

/* GET users listing. */
router.post('/', function(req, res, next) {
    // BOT_ID

    parser.messageParser(req.body.text, (err, result) => {
        if (err) {
            res.statusCode = 500;
            res.json(err);
        } else {
            res.statusCode = 200;
            //res.json();
            postMessage(result);
        }
    });

    res.send();
});

function postMessage(botResponse) {
    var options, body, botReq;

    options = {
        hostname: 'api.groupme.com',
        path: '/v3/bots/post',
        method: 'POST'
    };

    body = {
        "bot_id": botId,
        "text": botResponse
    };

    console.log('sending ' + botResponse + ' to ' + botId);

    botReq = HTTPS.request(options, function(res) {
        if (res.statusCode == 202) {
            //neat
        } else {
            console.log('rejecting bad status code ' + res.statusCode);
        }
    });

    botReq.on('error', function(err) {
        console.log('error posting message ' + JSON.stringify(err));
    });
    botReq.on('timeout', function(err) {
        console.log('timeout posting message ' + JSON.stringify(err));
    });
    botReq.end(JSON.stringify(body));
}

module.exports = router;