import { Request, Response } from 'express';
import assert, { AssertionError } from 'node:assert';
import { mapLongUrl } from '../utils/mapLongUrl'

export const shortenHandler = (req: Request, res: Response) => {
  const { body } = req;

  try {
    assert.equal('data' in body, true, 'Expected data to be defined');
    const { data } = body;
    assert.equal('url' in data, true, 'Expected url to be defined');
    const { url } = data;
    const key = mapLongUrl(url);
    assert.equal(key && key.length > 0, true, 'Expected key to be defined');
    return res.send({ data: { status: 'completed', url: key } });
  } catch (error) {
    if (error instanceof AssertionError) {
      res.status(400);
      res.send({ error: error.message });
    }

    res.status(400);
    res.send({ error }); 
  }

  return res.send({ data: { status: 'unhandled' } });
}