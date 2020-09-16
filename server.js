
const express = require('express'); // importar mod. express
const server = express();           //  instanciar o express
const dotenv = require('dotenv').config(); //Importar e configurar o módulo.

//Rotas

//req -> requisição do cliente
//res -> resposta do servidor
server.get('/', function (req, res) {
    res.send('Bem vindo ao meu servidor NodeJS.');
})

server.get('/cursos', function (req, res) {
    res.json({
        'web': "React Node JS",
        'Mobile': "React Node JS",
        'ML': "Data Science"
    });
});


server.listen(process.env.PORT); // criar o servidor e faze-lo executar em uma porta
//server.listen(3002);                // criar o servidor e faze-lo executar em uma porta
console.log(`Servidor foi iniciado na porta ${process.env.PORT}.`);