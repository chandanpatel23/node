//var catMe = require('cat-me');
var express = require('express');
var morgan = require('morgan');
//console.log(catMe());
var app = express();  

app.use(morgan('dev'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.set("view engine", "ejs");



app.get('/', function (req, res) {
  res.render("index");
});

app.get('/greet', function (req, res) {
  res.send("Response from Greetings!");
});

app.get('/about', function (req, res) {
  res.send("About page!");
});

app.post('/get-form-data',  (req, res) => {
  //console.log(req.query);
  console.log(req.body);
  res.send("Received your data!");
  
});

app.listen(3000);