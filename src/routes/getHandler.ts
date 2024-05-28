import { Request, Response } from 'express';
import assert, { AssertionError } from 'node:assert';

export const getHandler = (req: Request, res: Response) => {
  const { params, body } = req;

  try {
    assert.equal(Object.keys(params).length === 0, true, 'Expected no params');
    assert.equal(Object.keys(body).length === 0, true, 'Expected no params');
    return res.send({ data: { status: 'online' } });
  } catch (error) {
    if (error instanceof AssertionError) {
      return res.send({ error: error.message });
    }

    return res.send({ error });
  }
};