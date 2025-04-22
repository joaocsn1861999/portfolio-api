import express from 'express';
import appRouter from './app.routes.js';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors());
app.use('/api/v1', appRouter);

export default app;