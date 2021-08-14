import express from 'express';
import { json, urlencoded } from 'body-parser';
import morgan from 'morgan';
import cors from 'cors';
import config from './config';
import itemRouter from './resources/item/item.router';
import listRouter from './resources/list/list.router';
import userRouter from './resources/user/user.router';

export const app = express();

app.disable('x-powered-by');

app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));
app.use(morgan('dev'));

app.use('/api/user', userRouter);
app.use('/api/item', itemRouter);
app.use('/api/list', listRouter);

export const start = () => {
  app.listen(config.port, () => {
    console.log(`REST API on http://localhost:${config.port}/api`);
  });
};
