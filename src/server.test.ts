import { createServer } from './server';

describe('createServer', () => {
  test('it returns an app', async () => {
    expect(createServer()).toBeDefined();
  })
});