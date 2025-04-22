import EmailService from '../services/email.service.js';

 class EmailController {
    async enviarContato(req, res) {
        try {
            const { nome, email, mensagem } = req.body;
          
            if (!nome || !email || !mensagem) {
              return res.status(400).json({
                falha: 'Dados incompletos'
              });
            }

            await EmailService.enviarContato(nome, email, mensagem);

            return res.status(200).json({
                mensagem: 'E-mail enviado com sucesso'
            });
        } catch (error) {
            return res.status(500).json({
              falha: 'Erro ao enviar e-mail'
            });
        }
      }
 } 

export default new EmailController();