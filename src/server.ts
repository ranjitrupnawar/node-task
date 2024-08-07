// src/server.ts

import express, { Request, Response } from 'express';
import { add, multiply } from '../src/utils';

const app = express();
const port = 3000;

app.use(express.json());

app.post('/add', (req: Request, res: Response) => {
  const { a, b } = req.body;
  if (typeof a === 'number' && typeof b === 'number') {
    res.json({ result: add(a, b) });
  } else {
    res.status(400).json({ error: 'Invalid input' });
  }
});

app.post('/multiply', (req: Request, res: Response) => {
  const { a, b } = req.body;
  if (typeof a === 'number' && typeof b === 'number') {
    res.json({ result: multiply(a, b) });
  } else {
    res.status(400).json({ error: 'Invalid input' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

export default app;
