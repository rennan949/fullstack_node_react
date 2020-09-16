
const express = require('express'); // importar mod. express
const server = express();           //  instanciar o express
const dotenv = require('dotenv').config(); //Importar e configurar o módulo.


//Configurações
server.use(express.json()); // permitir resposta ao cliente em formato JSON

//Rotas
server.use(require('./src/routes'))


server.listen(process.env.PORT); // criar o servidor e faze-lo executar em uma porta
//server.listen(3002);                // criar o servidor e faze-lo executar em uma porta
console.log(`Servidor foi iniciado na porta ${process.env.PORT}.`);