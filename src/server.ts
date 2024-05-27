import express, { Request, Response } from 'express';
import cors from 'cors';

export const createServer = () => {
	const app = express();
  app.use(cors());
  app.use(express.json());
  app.get('/', (req: Request, res: Response) => {
    console.log('GET /')
    res.send({ data: 'success' })
  })

  return app;
}

