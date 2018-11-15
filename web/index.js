const express = require('express');
const expressNunjucks = require('express-nunjucks');

const app = express();
expressNunjucks(app);

app.get('/', (req, res) => res.render('index'));

app.get('/aboutus', (req, res) => res.render('aboutus'));

app.get('/contact', (req, res) => res.render('contact'));

app.get('/login', (req, res) => res.render('login'));

app.get('/signup', (req, res) => res.render('signup'));

app.use(express.static('assets'));

app.listen(8000);
