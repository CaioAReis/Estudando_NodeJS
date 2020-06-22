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
        Post.findAll({order: [['id', 'DESC']]}).then((posts) => {
            responce.render('home', {posts: posts});
        });
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

/*
    EXIBINDO DADOS:

    -->Para pegar todos os dados do bando de dados, basta usar a fnction .all() em um model, dentro de uma rota,
    e depois precisamos passar esses dados para dentro da view:

    app.get('/', (request, responce) => {
        nomeDoModel.findAll().then((nomeALE) => {
            responce.render('home', {nomeALE: nomeALE});
        });
    });

    --> .findAll() : Função responsável por pegar todos os dados de uma tabela, através do model que à representa.
    --> .then((nomeALE) => {}) : Função responsável por receber todos os dados no 1º parâmetro (nomeALE) 
    passá-los para dentro da view.
    --> responce.render('home', {}) : Agora este comando passará para dentro da função .then() como mostra acima.
    E o segundo parâmentro da função .render() serve para passar qualquer tipo de dado para o frontend.
    EXEMPLO:
        responce.render('home', {nome: "Caio", sobrenome: "Almeida"});

        E p/ exibir os dados passados em um html, basta abrir e fechar chaves 2x, colocando o nome da variável
        dentro da segunda chave:

        EXEMPLO html:

            {{nome}}
            {{sobrenome}}

    Neste caso vamos passar a variável nomeAle, pois ela contém todos os registros da tabela.

        EXEMPLO html: 

            {{nomeAle}}

        Porém quando recebemos muios objetos dentro de uma view, os dados não serão apresentados da
        forma que desejamos, por isso existe uma estrutura handlebars que pode nos ajudar com isso.

            EXEMPLO:

                {{#each nomeALE}}
                    <h1> {{dataValues.nomeColuna1}} </h1>
                    <p> {{dataValues.nomeColuna2}} </p>
                {{/each}}

        A estrutura acima funciona como um 'for' da programação: "Para cada item da tabela, faça algo"

        Fazendo isso os dados de registro de uma tabela no banco de dado serão exibidos, em tela como posts.
        
        Para odenar as 'postagens' basta adicionar o seguuinte código dentro da função .findAll():

            .findAll({order: [['id', 'ASC']]})    --> PARA DECRESCENTE
            .findAll({order: [['id', 'DESC']]})   --> PARA CRESCENTE
*/