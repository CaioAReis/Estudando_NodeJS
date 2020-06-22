//  IMPORTANDO O EXPRESS
const express = require('express');
//  IMPORTANDO HANDLEBARS
const handlebars = require('express-handlebars');
// IMPORTANDO O BODY PARSER
const bodyParser = require('body-parser');
//  IMPORTANDO MODEL Post.js
const Post = require('./models/Post');

const app = express();

// CONFIG
    //  TEMPLATE ENGINE
        app.engine('handlebars', handlebars({defaultLayout: 'main'}));
        app.set('view engine', 'handlebars');

    //  BODY PARSER
        app.use(bodyParser.urlencoded({exended: false}));
        app.use(bodyParser.json());

// ROTAS
    app.get('/', function(request, responce) {
        responce.render('home');
    });

    app.get('/cad', function(request, responce) {
        responce.render('formulario');
    });

    //  Recebendo dados por do formulário e adicionando ao banco de dados MySQL
        app.post('/add', (request, responce) => {
            Post.create({
                titulo: request.body.titulo,
                conteudo: request.body.conteudo
            }).then(() => {
                // responce.send('Postagem criada com sucesso!!');
                //  O COMANDO ABAIXO SERVE P/ REDIRECIONAR O USUÁRIO À UMA ROTA ESPECÍFICA
                responce.redirect('/');
            }).catch((err) => {
                responce.send('Erro ao criar postagem!! ERRO: ' + err);
            });
        });

app.listen(3333, () => {console.log("Servidor Rodando!!")});

//  UMA BOA PRÁTICA É DEIXAR CADA MODEL EM ARQUIVOS SEPARADOS!!

//   A 1ª coisa que deve ser feita é a importação do model para o index.js, pois é através do index.js que os 
//   módels serão acessados.