const db = require('./connectors/mongo');

const initServer = () => {
  const express = require('express');
  const router = express.Router();
  const bodyParser = require('body-parser');

  const { errors } = require('celebrate');

  const app = express();
  const routes = require('./routes');

  app.use(bodyParser.json());
  app.use('/', routes(router));

  app.use(errors);

  app.listen(process.env.PORT || 8000);
  console.info('Node Server Started');
};

db.once('open', () => initServer());
