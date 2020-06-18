//  IMPORTANDO O EXPRESS
const express = require('express');
//  IMPORTANDO HANDLEBARS
const handlebars = require('express-handlebars');
//  IMPORTANDO SEQUELIZE
const Sequelize = require('sequelize');

const app = express();

// CONFIG
    //  TEMPLATE ENGINE
        app.engine('handlebars', handlebars({defaultLayout: 'main'}));
        app.set('view engine', 'handlebars');

    //  CRIANDO CONEXÃO COM O BANCO DE DADOS MySQL
    const sequelize = new Sequelize('testBASE', 'root', '*****', {
        host: 'localhost',
        dialect: 'mysql'
    });

// ROTAS
    app.get('/', function(request, responce) {
        responce.send("HOME");
    });

    app.get('/cad', function(request, responce) {
        responce.render('formulario');
    });

app.listen(3333, () => {console.log("Servidor Rodando!!")});

/*
    Para criar um formulário é nescessário criar um arquivo Handlebars chamado formulário, dentro da pasta views:

        formulario.handlebars

    Esses arquivo teremos o seguinte código HTML:

        <form action="">
            <p>Título: </p>
            <input type="text" name="titulo">
            <p>Contúdo: </p>
            <textarea name="conteudo"></textarea>
            <button type="submit">Enviar</button>
        </form>

    OBS.: Não é nescessário criar toda a estrutura HTML, pois o handlebars adiciona automáticamente
    toda a estrutura HTML, pois definimos isso anteriormente com o comando layoutdefault: 'main'.

    Para mostrar o formulário no navegador, basta usar a função .render('formulario') como responce de uma rota.

    EXEMPLO:

        app.get('/', function(request, responce) {
            responce.render('formulario');
        });

    Desta forma o formulário será exibido no navegador.
*/