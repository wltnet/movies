import express, { Request, Response } from 'express';
import { movies } from './data.js';

const app = express();

app.get('/api/movies', (req: Request, res: Response) => {
  res.json(movies);
});

app.listen(4000, () => console.log('Server listening on port 4000'));
