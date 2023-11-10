const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors'); // Importa la librería cors

const app = express();

// Configura el middleware para procesar datos JSON
app.use(bodyParser.json());

// Configura CORS para permitir solicitudes desde http://localhost:3000
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true,
}));

// Configura la ruta para enviar el correo electrónico
app.post('/api/send-email', (req, res) => {
  const { fullName, email, phone, prayerRequest } = req.body;

  // Dirección de correo electrónico del destinatario obtenida del formulario
  const recipientEmail = email;

  // Configura el transporte de correo electrónico usando nodemailer
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'dani.roomu@gmail.com',
      pass: 'idqynzwxjxjcmmca'
    }
  });

  // Configura el contenido del correo electrónico
  const mailOptions = {
    from: recipientEmail, // Usa la dirección de correo electrónico del cliente como destinatario
    to: 'dani.roomu@gmail.com', 
    subject: 'Nueva solicitud de oración',
    text: `Nombre: ${fullName}\nEmail: ${email}\nTeléfono: ${phone}\nPetición de Oración: ${prayerRequest}`
  };

  // Envía el correo electrónico
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error al enviar el correo electrónico:', error);
      res.status(500).send('Error al enviar el correo electrónico');
    } else {
      console.log('Correo electrónico enviado:', info.response);
      res.status(200).send('Correo electrónico enviado con éxito');
    }
  });
});

// Inicia el servidor en el puerto 3001
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Servidor en ejecución en el puerto ${PORT}`);
});
