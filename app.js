const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const filePath = path.resolve(__dirname);
const nodemailer = require('nodemailer');
const app = express();
const EMAIL = process.env.USER_ID;
const PASSW = process.env.USER_KEY;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("./"));
app.use(express.static("./pages"));


app.get('/', (req, res) => {
    res.sendFile(filePath + '/index.html');
});


app.post('/sending', (req, res) => {
    console.log(req.body);
    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: EMAIL,
            pass: PASSW
        }
    });

    const mail_option = {
        from :'gabaritocasaaa@gmail.com',
        to:'gabaritocasaaa@gmail.com',
        subject: 'Travels',
        text: "Mensagem de "+req.body.nome+" "+req.body.sobrenome+" de "+req.body.cidade+" com o numero de telefone "+req.body.telefone+". Sua mensagem diz o seguinte: '"+req.body.mensagem+ "'."
    };

    transporter.sendMail(mail_option, (error, info) => {
        if (error){
            console.error(error);
        }else{
            res.redirect('/contato');
        }
    })

});


app.get('/contato', (req, res) => {

    res.sendFile(filePath + '/contato.html');
});

app.listen(5500, () => {
    console.log("Listening on port 5500");
})
