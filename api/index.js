require('dotenv').config();
const db = require('./connectors/mongo');

const initServer = () => {
  const express = require('express');
  const cors = require('cors');
  const bodyParser = require('body-parser');
  const router = express.Router();
  const routes = require('./routes');
  const { errors } = require('celebrate');

  const app = express();

  app.options('*', cors());
  app.use(cors());
  app.use(bodyParser.json());
  app.use('/', routes(router));
  app.use(errors);

  app.listen(process.env.SEVER_PORT);
  console.info('Node Server Started');
  console.log('Environment: ' + process.env.NODE_ENV);
};

db.once('open', () => initServer());
