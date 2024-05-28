import express, { Request, Response } from 'express';
import cors from 'cors';
import { shortenHandler } from './routes/shortenHandler';
import { getHandler } from './routes/getHandler';
import { getByIdHandler } from './routes/getByIdHandler';

export const createServer = () => {
	const app = express();
  app.use(cors());
  app.use(express.json());
  app.get('/', getHandler);
  app.get('/:shortUrl', getByIdHandler);
  app.post('/shorten', shortenHandler);

  return app;
}

