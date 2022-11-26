var express = require('express');
var app = express();
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set('view engine', 'ejs');

var task = ["buy socks", "practise with nodejs"];
var complete = ["finish jquery"];


app.get('/', function (req, res) {
  res.render('index',{ task: task,complete: complete });
});

app.get('/greet/:name', function(req,res){
    res.send(`Hello ${req.params['name']}`)
});

//Add task
app.post('/addtask', function (req, res) {
  var newTask = req.body.newtask;
  if(newTask.length!=0)
  {
    task.push(newTask);
    res.redirect("/");
  }
  
});

//remove task
app.post('/removetask', function (req, res) {
  var completeTask = req.body.check;
  if (typeof completeTask=="string")
  {
    complete.push(completeTask);
    task.splice(task.indexOf(completeTask),1);
  }
  else if (typeof completeTask=="object")
  {
    for(var i=0;i<completeTask.length;i++)
    {
      complete.push(completeTask[i]);
      task.splice(task.indexOf(completeTask[i]),1)
    }
  }
  //after adding to the array go back to the root route
  res.redirect("/");
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});