require('dotenv').config();
const express = require('express');
const expressNunjucks = require('express-nunjucks');

const sassMiddleware = require('node-sass-middleware');
const path = require('path');

const checkAuth = require('./middlewares/check-auth.js');
const checkAuthSignUp = require('./middlewares/check-auth-signup.js');
const redirectToDashboard = require('./middlewares/redirect-to-dashboard.js');

const app = express();
expressNunjucks(app, { globals: { API_HOST: process.env.API_HOST } });
app.use(
  sassMiddleware({
    src: path.join(__dirname, 'assets'),
    dest: path.join(__dirname, 'assets'),
  }),
);

app.get('/', checkAuth, (req, res) => res.render('dashboard'));

app.get('/aboutus', checkAuth, (req, res) => res.render('aboutus'));

app.get('/contact', checkAuth, (req, res) => res.render('contact'));

app.get('/profile', checkAuth, (req, res) => res.render('profile'));

app.get('/login', redirectToDashboard, (req, res) => res.render('login'));

app.get('/signup', checkAuthSignUp, (req, res) => res.render('signup'));

app.use(express.static('assets'));

app.listen(process.env.SEVER_PORT);
console.log('Node Server Started');
console.log('Environment: ' + process.env.NODE_ENV);
