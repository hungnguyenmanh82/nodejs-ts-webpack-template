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

/**
 * _dirname: là folder của index.ts (dùng ở file *.ts nào thì folder đó)
 * path: 'public' relative path of _dirname
 * interceptor tất cả các request "static/*"
 * express.static() trả về static file
 *
 */
app.use('/static', express.static(path.join(__dirname, '../../public')));

app.get('/', (req: Request, res: Response) => {
  res.redirect('/static/index.html');
});

app.get('/abc', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server with Nodemon, Webpack');
});

const jsonTest = { name: 'hungbeo', age: 12, address: 'Hanoi' };

app.get('/api', (req: Request, res: Response) => {
  res.json(jsonTest);
});

//other request
app.get('*', (req: Request, res: Response) => {
  res.send(req.path);
});

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});
