var express = require('express');
var app = express();
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs');

var task = ["buy socks", "practise with nodejs"];


app.get('/', function (req, res) {
  res.render('index',{ task: task });
});

app.get('/greet/:name', function(req,res){
    res.send(`Hello ${req.params['name']}`)
});
app.post('/addtask', function (req, res) {
  var newTask = req.body.newtask;
  task.push(newTask);
  //after adding to the array go back to the root route
  res.redirect("/");
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});