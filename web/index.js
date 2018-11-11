require('dotenv').config();
const express = require('express');
const expressNunjucks = require('express-nunjucks');

const checkAuth = require('./middlewares/check-auth.js');
const redirectToDashboard = require('./middlewares/redirect-to-dashboard.js');

const app = express();
expressNunjucks(app, { globals: { API_HOST: process.env.API_HOST } });

app.get('/', checkAuth, (req, res) => res.render('dashboard'));

app.get('/aboutus', checkAuth, (req, res) => res.render('aboutus'));

app.get('/contact', checkAuth, (req, res) => res.render('contact'));

app.get('/profile', checkAuth, (req, res) => res.render('profile'));

app.get('/login', redirectToDashboard, (req, res) => res.render('login'));

app.use(express.static('assets'));

app.listen(process.env.DEFAULT_SEVER_PORT || 8000);
