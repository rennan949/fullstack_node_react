const express = require('express');
const routes = express.Router();
const musculacaoController = require('./controllers/musculacao');
// Criar rotas

//req -> requisição do cliente
//res -> resposta do servidor
routes.get('/', function (req, res) {
    res.send('Bem vindo ao meu servidor NodeJS.');
})

routes.get('/cursos', (req, res) => {  //"Arrow function"
    res.json({
        'web': "React Node JS",
        'Mobile': "React Node JS",
        'ML': "Data Science"
    });
});

routes.post('/cursos', (req, res) => {
    const response = req.body;
    res.json(response);

});

routes.post('/alunos', (req, res) => {
    const response = req.body;
    res.status(200).send();
    //console.log('Bem vindo ' + response.nome); 
    console.log(`Bem vindo ${response.nome} ${response.sobrenome}`);



});

// Capturando os parametros pela URL.
routes.post('/prog/:nome', (req, res) => {
    const response = req.params.nome;
    res.send(response);

});


routes.post('/diretoria', (req, res) => {
    const nome = req.query.nome;
    const idade = req.query.idade;
    const sexo = req.query.sexo;
    //res.send(nome + ' ' + idade + ' ' + sexo);
    res.send(`${nome} ${idade} ${sexo}`);

});


routes.post('/matricula', musculacaoController.planoMusculacao);



module.exports = routes;