// import path from 'path';
import express, { Request, Response } from 'express';

const app = express();

app.get('/api/', (req: Request, res: Response) => {
    res.send('Hello');
});

app.listen(4000, () => console.log('Server listening on port 4000'));
