require('dotenv').config()

const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/send-mail', async (req, res) => {
    const { name, email, subject, message } = req.body;

    // Configurando o transportador Nodemailer
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASSWORD,
        },
    });

    // Configurando as opções do email
    let mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER,
        subject: subject,
        text: `${name} (${email}) enviou a seguinte mensagem:\n\n Subject:${subject}\n\nMessage:\n${message}`,
    };

    await transporter.sendMail(mailOptions, function (err, data) {
        if (err) {
            console.log('Erro ocorreu', err);
            res.status(500).send();
        } else {
            console.log('Email enviado!');
            res.status(200).send();
        }
    });
});

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});