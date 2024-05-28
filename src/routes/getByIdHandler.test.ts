import supertest from 'supertest';
import { createServer } from '../server';

describe('getByIdHandler', () => {
  test('GET / with non existent url', async () => {
    const app = createServer();
    await supertest(app)
      .get('/nonexistent')
      .expect(200)
      .expect({ data: { status: 'no_url' } });
  });

  test('GET / with existent url', async () => {
    const app = createServer();
    const response = await supertest(app)
      .post('/shorten')
      .send({
        data: {
          url: 'http://www.example.com'
        }
      });

    const { body } = response;
    const { data } = body;
    const { url }  = data;

    await supertest(app)
      .get(`/${url}`)
      .expect(200)
      .expect({
        "data": {
            "url": "http://www.example.com",
            "status": "success"
        }
    });
  })
});