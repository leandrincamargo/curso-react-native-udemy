import express from 'express';
const app = express();
import consign from 'consign';

const db = require('./config/db');

consign({ extensions: ['.js', '.json', '.node', '.ts'] })
  .include('./config/passport.ts')
  .then('./config/middlewares.ts')
  .then('./api')
  .then('./config/routes.ts')
  .into(app);

app.db = db;

app.listen(3000, () => {
  console.log('Backend executando...');
});
