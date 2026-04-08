export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, message } = req.body;

  if (!email || !message) {
    return res.status(400).json({ error: 'Email e mensagem são obrigatórios' });
  }

  try {
    // TODO: Configurar Nodemailer para enviar emails
    // Por enquanto, salvamos em log para demonstração
    
    // Simulação de envio bem-sucedido
    console.log('Nova pergunta recebida:', {
      nome: name || 'Anônimo',
      email,
      mensagem: message,
      timestamp: new Date().toISOString()
    });

    // Em produção, descomente e configure o Nodemailer:
    /*
    const nodemailer = require('nodemailer');
    
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: 'cortez.jeancoutinho@gmail.com',
      subject: `Nova pergunta de ${name || 'visitante anônimo'}`,
      html: `
        <h2>Nova pergunta recebida via site RRT</h2>
        <p><strong>Nome:</strong> ${name || 'Anônimo'}</p>
        <p><strong>Email para resposta:</strong> ${email}</p>
        <p><strong>Mensagem:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `
    });

    // Confirmação para o usuário
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Pergunta recebida - RRT Academy',
      html: `
        <h2>Obrigado por sua pergunta!</h2>
        <p>Recebemos sua mensagem e o autor responderá em breve.</p>
        <hr>
        <p><strong>Sua pergunta:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `
    });
    */

    return res.status(200).json({ 
      success: true, 
      message: 'Pergunta enviada com sucesso! Em breve você receberá uma resposta no email fornecido.' 
    });

  } catch (error) {
    console.error('Erro ao enviar pergunta:', error);
    return res.status(500).json({ error: 'Erro ao processar sua pergunta' });
  }
}
