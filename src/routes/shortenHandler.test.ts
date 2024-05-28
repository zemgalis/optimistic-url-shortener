import supertest from 'supertest';
import { createServer } from '../server';

describe('shorten handler', () => {
  test('POST /shorten with no payload', async () => {
    const app = createServer();
    await supertest(app)
      .post('/shorten')
      .expect(400)
      .expect({ error: 'Expected data to be defined' });
  });

  test('POST /shorten with invalid payload - no data', async () => {
    const app = createServer();
    await supertest(app)
      .post('/shorten')
      .send({})
      .expect(400)
      .expect({ error: 'Expected data to be defined' });
  });

  test('POST /shorten with invalid payload - no url', async () => {
    const app = createServer();
    await supertest(app)
      .post('/shorten')
      .send({
        data: {}
      })
      .expect(400)
      .expect({ error: 'Expected url to be defined' });
  });

  test('POST /shorten with valid payload', async () => {
    const app = createServer();
    await supertest(app)
      .post('/shorten')
      .send({
        data: {
          url: 'http://www.example.com'
        }
      })
      .expect(200);
  });
})