import { Router } from 'express';
import EmailController from '../controllers/email.controller.js';

const emailRouter = Router();

emailRouter.post('/contato', (req, res) => EmailController.enviarContato(req, res));

export default emailRouter;