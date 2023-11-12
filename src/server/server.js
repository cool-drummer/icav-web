require('dotenv').config(); // Cargar variables de entorno desde el archivo .env
const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(cors({
  origin: 'https://www.icavteoloyucan.com',
  credentials: true,
}));

const API_URL = process.env.API_URL || "https://api.icavteoloyucan.com";


app.post('/api/send-email', (req, res) => {
  const { fullName, email, phone, prayerRequest } = req.body;

  const recipientEmail = email;

  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  const mailOptions = {
    from: recipientEmail,
    to: 'dani.roomu@gmail.com',
    subject: 'Nueva solicitud de oración',
    text: `Nombre: ${fullName}\nEmail: ${email}\nTeléfono: ${phone}\nPetición de Oración: ${prayerRequest}`
  };

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

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Servidor en ejecución en el puerto ${PORT}`);
});

// Usar API_URL en algún lugar del código
console.log(API_URL);
