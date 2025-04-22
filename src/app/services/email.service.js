import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config({ path:'./.env' });

class EmailService {
  async enviarContato(nome, email, mensagem) {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    const mailOptions = {
      from: email,
      to: process.env.EMAIL_RECEIVER,
      subject: 'Contato via Portfólio',
      text: `Nome: ${nome}\nEmail: ${email}\nMensagem: ${mensagem}`,
    };

    return transporter.sendMail(mailOptions);
  }
}

export default new EmailService();
