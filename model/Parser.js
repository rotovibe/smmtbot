var express = require('express');
var b1Msg = require('./b1');

const mParser = {
    messageParser: (message, callback) => {
        var botWord = stringParser(message);
        var response;

        if (botWord === "r4") {
            response = "R4 is in the upper left side of the top balcony."
        }

        if (botWord.substring(0, 2) === "b1") {
            response = b1Msg.getB1Message(botWord);
        }

        return callback(null, response);
    }
};


function stringParser(str) {
    //var s = "#hallo, this is a test #john #doe";
    var re = /(?:^|\W)#(\w+)(?!\w)/g,
        match, matches = [];
    while (match = re.exec(str)) {
        matches.push(match[1]);
    }

    return matches[0].toString();
}

module.exports = mParser;