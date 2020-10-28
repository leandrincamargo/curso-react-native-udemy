import { Express } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

module.exports = (app: Express) => {
  app.use(bodyParser.json());
  app.use(
    cors({
      origin: '*',
    }),
  );
};
