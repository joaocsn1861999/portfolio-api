import express from 'express';
import appRouter from './app.routes.js';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config({ path:'./.env' });

const app = express();

app.use(express.json());
app.use(cors({
    origin: process.env.CLIENTE_ORIGIN,
}));
app.use('/api/v1', appRouter);

export default app;