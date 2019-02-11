var express = require('express')
var app = express()
var request = require('request');
var userData = require('./sampleUser.json');
var testUrl = "https://testapi.open-platform.or.kr/"
var qs = require('querystring');

console.log(userData);

app.get('/getAuth', function (req, res) {
    var options = {
        method: 'GET',
        url: testUrl + '/oauth/2.0/authorize_account',
        headers:
        {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
            'Authorization': 'Bearer ' + userData.quiryToken
        },
        form: {
            fintech_use_num: userData.finNum,
            tran_dtime: "20160310101921"
        }
    };
    request(options, function (error, response, body) {
        if (error) {
            console.log(err);
            throw new Error(error);
        }
        console.log(body);
    });
})

app.get('/', function (req, res) {
    var request = require('request');
    request('http://www.google.com', function (error, response, body) {
        console.log('error:', error); // Print the error if one occurred
        console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
        console.log('body:', body); // Print the HTML for the Google homepage.
        res.send(body);
    });
})

app.get('/authToken', function (req, res) {
    console.log(userData.quiryToken)
    const qsObj = {
        fintech_use_num: userData.finNum,
        tran_dtime: 20190211180113
    }
    var urlQs = qs.stringify(qsObj);
    var options = {
        method: 'GET',
        url: 'https://testapi.open-platform.or.kr/account/balance?' + urlQs,
        headers:
        {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
            'Authorization': 'Bearer ' + userData.quiryToken
        },
    };
    request(options, function (error, response, body) {
        if (error) {
            console.log(err);
            throw new Error(error);
        }
        console.log(JSON.parse(body));
        res.send(body);
    });
});

app.get('/testAuth', function (res, res) {
    var options = {
        method: 'GET',
        url: testUrl + '/bank/status',
        headers:
        {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
            'Authorization': 'Bearer ' + userData.quiryToken
        },
        form: {
            fintech_use_num: userData.finNum,
            tran_dtime: "20160310101921"
        }
    };
    request(options, function (error, response, body) {
        if (error) {
            console.log(err);
            throw new Error(error);
        }
        console.log(body);
    });
});

app.get('/testApi', function (req, res) {
    console.log(userData.quiryToken)
    var options = {
        method: 'GET',
        url: 'https://testapi.open-platform.or.kr/account/balance?fintech_use_num=' + userData.finNum + '&tran_dtime=20160310101921',
        headers:
        {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
            'Authorization': 'Bearer ' + userData.quiryToken
        },
    };
    request(options, function (error, response, body) {
        if (error) {
            console.log(err);
            throw new Error(error);
        }
        console.log(body);
        res.send(body);
    });
})

app.listen(1818);
