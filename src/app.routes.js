import { Router } from 'express';

const appRouter = Router();

appRouter.use('', (req, res) => {
  res.status(200).send('API rodando!');
});

export default appRouter;