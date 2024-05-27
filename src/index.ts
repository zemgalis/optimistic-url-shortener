import { createServer } from './server';

const app = createServer();

app.listen(80, () => {
  console.log('server listening');
});