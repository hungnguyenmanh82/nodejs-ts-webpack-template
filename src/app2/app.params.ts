/* express là default export ES6 */
import express from 'express';
/* các class còn lại là export thông thường ES6 */
import { Request, Response } from 'express';

import path from 'path';

// rest of the code remains same
const app = express();

/**
 * interceptor all request => logger
 */
app.use((req: Request, res: Response, next) => {
  console.log(req.path);
  next();
});

app.get('/', (req: Request, res: Response) => {
  // _dirname = folder của *.js file này
  res.sendFile(path.join(__dirname, './index.html'));
});

const jsonTest = { name: 'hungbeo', age: 12, address: 'Hanoi' };

app.get('/api/:id', (req: Request, res: Response) => {
  res.send('params id = ' + req.params.id);
});

//other request
app.get('*', (req: Request, res: Response) => {
  res.send(req.path);
});

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});
