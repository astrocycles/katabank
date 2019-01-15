
var express = require('express');
var hostname = 'localhost';
var port = 3000;

var app = express();

var myRouter = express.Router();
//body Parser
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


//db

var account = {
      "id": number = 1,
      "balance": number = 1000,
      "operations": []
};

//routes

myRouter.route('/')
      .all(function (req, res) {
            res.json({ message: "Welcome to your bank API " });
      });

myRouter.route('/account')
      .get(function (req, res) {
            res.json(account);
      });


myRouter.route('/deposit')
      .put(function (req, res) {
            const balance = account.balance;
            var today = new Date()
            const timestamp = today.toLocaleString();
            account.balance += req.body.value;
            account.operations.push({ oldBalance: balance, newBalance: account.balance, timestamp: today.toLocaleString() });
            res.json({ message: "The current account's balance is: " + account.balance });
      });

myRouter.route('/withdrawal')
      .put(function (req, res) {
            const balance = account.balance;
            var today = new Date()
            const timestamp = today.toLocaleString();
            account.balance -= req.body.value;
            account.operations.push({ oldBalance: balance, newBalance: account.balance, timestamp:today.toLocaleString() });
            res.json({ message: "The current account's balance is: " + account.balance });
      });

myRouter.route('/history')
      .get(function (req, res) {
            res.json(account.operations);
      })

app.use(myRouter);

// Démarrer le serveur 
app.listen(port, hostname, function () {
      console.log("Mon serveur fonctionne sur http://" + hostname + ":" + port);
});