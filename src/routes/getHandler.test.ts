import supertest from 'supertest';
import { createServer } from '../server';

describe('getHandler', () => {
  test('GET /', async () => {
    const app = createServer();
    await supertest(app)
      .get('/')
      .expect(200)
      .expect({ data: { status: 'online' } });
  });
});