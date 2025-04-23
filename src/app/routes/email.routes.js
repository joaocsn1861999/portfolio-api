import { Router } from 'express';
import EmailController from '../controllers/email.controller.js';
import validarEmail from '../validators/email.validator.js';

const emailRouter = Router();

emailRouter.post(
    '/contato', 
    validarEmail,
    (req, res) => EmailController.enviarContato(req, res),
);

export default emailRouter;