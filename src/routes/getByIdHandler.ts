import { Request, Response } from 'express';
import assert, { AssertionError } from 'node:assert';
import { cache } from '../utils/cache';

export const getByIdHandler = (req: Request, res: Response) => {
  const { params } = req;
  
  try {
    assert.equal('shortUrl' in params, true, 'Expected params to be defined');
    const { shortUrl } = params;
    if (cache.has(shortUrl)) {
      const longUrl = cache.get(shortUrl);
      return res.send({ data: { url: longUrl, status: 'success' } })
    }

    return res.send({ data: { status: 'no_url' } });
  } catch (error) {
    if (error instanceof AssertionError) {
      return res.send({ error: error.message });
    }

    return res.send({ error });
  }
};