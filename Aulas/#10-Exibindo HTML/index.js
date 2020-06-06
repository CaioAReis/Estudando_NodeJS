const express = require('express');
const app = express();

app.get('/', function(request, responce) {
    responce.sendFile(__dirname + '/html/home.html');
});

app.get('/sobre', function(request, responce) {
    responce.sendFile(__dirname + '/html/sobre.html');
});

app.listen(3333, function() {
    console.log("Servidor Rodando!!");
});

/* EXIBINDO HTML

    Para exibir um arquivo HTML através do Node.js utiliza-se do método .sendFile() e o caminho
    até o arquivo. 
    EXEMPLO (recomendado):

        app.get('/', function(request, responce) {
            responce.sendFile(__dirname + '/html/home.html');
        });

    --> Utiliza-se a variável __dirname para dizer que o arquivo HTML está no mesmo diretório 
    da aplicação. Esta é a forma mais recomendada p/ a busca do diretório, pois evita erros e
    uma grande quantidade de linhas p/ dizer qual o diretório do arquivo.
    EXEMPLO SEM A VARIÁVEL __dirname (NÃO recomendado):

        app.get('/', function(request, responce) {
            responce.sendFile('/home/User/Git/Estudando_nodeJS/Aulas/#10-Exibindo HTML/html/home.html');
        });
*/