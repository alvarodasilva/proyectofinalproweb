const express = require('express');
const router = express.Router();
const { errors } = require('celebrate');

const app = express();
const routes = require('./routes');

// Connect to mongoDB.
require('./connectors/mongo');

app.use('/', routes(router));
app.use(errors);

app.listen(process.env.PORT || 8000);
