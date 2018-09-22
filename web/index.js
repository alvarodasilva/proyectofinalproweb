const express = require('express');
const expressNunjucks = require('express-nunjucks');

const app = express();
expressNunjucks(app);

app.get('/', function(req, res){
  res.render('index');
})
app.get('/aboutus', function(req, res){
  res.render('aboutus');
})
app.get('/contact', function(req, res){
  res.render('contact');
})
app.get('/login', function(req, res){
  res.render('login');
})
app.listen(8000);
