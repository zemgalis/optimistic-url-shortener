import { Request, Response } from 'express';

export const shortenHandler = (req: Request, res: Response) => {
  res.send({ data: 'success' });
}