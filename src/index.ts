import { createServer } from './server';

const app = createServer();

const port = 80;

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});