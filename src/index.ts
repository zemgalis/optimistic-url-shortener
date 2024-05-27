import express, { Request, Response } from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());
app.get('/', (req: Request, res: Response) => {
  console.log('GET /')
  res.send({ data: 'success' })

})

app.listen(80, () => {
  console.log('server listening');
});