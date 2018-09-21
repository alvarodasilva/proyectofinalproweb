const express = require('express');
const expressNunjucks = require('express-nunjucks');

const app = express();
expressNunjucks(app);

app.get('/', function(req, res){
  res.render('index');
})
app.listen(8000);
