import { Router } from 'express';
import emailRouter from './routes/email.routes.js';

const appRouter = Router();

appRouter.use('/email', emailRouter);

export default appRouter;