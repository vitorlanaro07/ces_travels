const express = require('express');
const bodyParser = require('body-parser');

// const path = require('path');
// const ejs = require('ejs');

// const filePath = path.basename('/Workspace/cesTravels/index.html');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("./"));
app.use(express.static("./pages"));
app.use(express.static("/images/01/"));


app.get('/', (req, res) => {
    res.sendFile('/home/retr0/Workspace/cesTravels/index.html');
});

app.post('/sending', (req, res) => {
    var nome = req.body.nome;
    var sobrenome = req.body.sobrenome;
    var telefone = req.body.telefone;
    var cidade = req.body.cidade;
    var mensagem = req.body.mensagem;
    res.redirect('/');
    console.log(nome, sobrenome, cidade, telefone, mensagem);
});

app.listen(5500, () => {
    console.log("Listening on port 5500");
})
