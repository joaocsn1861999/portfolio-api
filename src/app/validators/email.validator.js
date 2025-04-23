export default async function validarEmail(req, res, next) {
    const { email } = req.body;
    
    if (
        !email.length > 5 ||
        !email.includes('@') ||
        !email.includes('.')
    ) {
      return res.status(400).json({
        falha: 'E-mail inválido',
      });
    }
  
    next();
  }
  