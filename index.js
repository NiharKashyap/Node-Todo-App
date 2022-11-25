var express = require('express');
var app = express();

app.set('view engine', 'ejs');


app.get('/', function (req, res) {
  res.render('index');
});

app.get('/greet/:name', function(req,res){
    res.send(`Hello ${req.params['name']}`)
});


app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});