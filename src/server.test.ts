import supertest from 'supertest';
import { createServer } from './server';

describe('server', () => {
  test('GET /', async () => {
    const app = createServer();
    await supertest(app)
      .get('/')
      .expect(200)
      .expect({ data: 'success' });
  });

  test('POST /shorten', async () => {
    const app = createServer();
    await supertest(app)
      .post('/shorten')
      .expect(200)
      .expect({ data: 'success' });
  })
})