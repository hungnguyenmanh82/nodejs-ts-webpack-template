/* express là default export ES6 */
import express from 'express';
/* các class còn lại là export thông thường ES6 */
import { Request, Response } from 'express';

/* load các biến môi trường từ file .env vào process.env */
import * as dotenv from 'dotenv';

/* enable CORS */
import cors from 'cors';
/**
 * bảo mật các ứng dụng bằng cách setting các HTTP headers khác nhau,
 * giúp giảm thiểu các attack vectors phổ biến
 */
import helmet from 'helmet';

// test import Module
import { message } from './test';
import path from 'path';

// rest of the code remains same
const app = express();

/**
 *  các Route interceptor
 */
app.use(helmet());
app.use(cors());
app.use(express.json());

/**
 * _dirname: là folder của index.ts (dùng ở file *.ts nào thì folder đó)
 * path: 'public' relative path of _dirname
 *  http://localhost/static/*
 */
app.use('/static', express.static(path.join(__dirname, '../public')));

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

app.get('*', (req: Request, res: Response) => {
  res.send(req.path);
});

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});

console.log(message);
