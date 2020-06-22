//  IMPORTANDO O EXPRESS
const express = require('express');
//  IMPORTANDO HANDLEBARS
const handlebars = require('express-handlebars');
//  IMPORTANDO SEQUELIZE
const Sequelize = require('sequelize');
// IMPORTANDO O BODY PARSER
const bodyParser = require('body-parser');

const app = express();

// CONFIG
    //  TEMPLATE ENGINE
        app.engine('handlebars', handlebars({defaultLayout: 'main'}));
        app.set('view engine', 'handlebars');

    //  BODY PARSER
        app.use(bodyParser.urlencoded({exended: false}));
        app.use(bodyParser.json());

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

    //  Recebendo dados por GET
        app.get('/add', (request, responce) => {
            responce.send('Dados enviados por GET!!');
        });
    //  Recebendo dadso por POST
        app.post('/add', (request, responce) => {
            responce.send('Dados enviados por POST!! \n Titulo: ' 
            + request.body.titulo + '\n Conteudo: ' + request.body.conteudo);
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

    --> ENVIANDO DADOS

        Para preparar nosso backend para receber os dados do formulário, precisamos definir dois atributos presentes
        no formulário.

        1º ATRIBUTO: action="" --> Basicamente serve para dizer em qual rota os dados do formulário deve ser enviado.

            <form action="/add" method="GET"> ...

        2º ATRIBUTO: method="" --> Basicamente é a forma de como os dados do formulário serão enviados para o backend.
        No HTML existem duas formas de envio, pelo método GET e pelo método POST.
        A grande diferença entre elas é que:

            GET: Envia os dados pela URL, o que na maioria dos casos não é um coisa boa,
            pois TODOS os dados (inclusive senhas) poderão ser visualisados pelos usuários.
            Este tipo de envio nos permite acessar rotas pela URL.

            POST: O método POST envia os dados de uma outra maneira e não pela URL, deixando
            os dados 'invisiveis' aos usuarios. Este tipo de envio não nos permite acessar uma
            rota pela URL.

        Para definir o método de envio do formulário basta pôr o nome no method:

            <form action="/add" method="GET"> ...
                OU
            <form action="/add" method="POST"> ...

        OBS.: À DEPENDER DO TIPO DE ENVIO DE DADOS DO FORMULÁRIO, PRECISAMOS ALTERAR TAMBÉM O TIPO DA ROTA!!

        EXEMPLO GET:
        
            --> NO HTML
                <form action="/add" method="GET"> ...
            --> NO NODE
                app.get('/add', fuunction(request, responce) { responce.send('FORMULÁRIO ENVIADO!!'); });

        EXEMPLO POST:

            --> NO HTML
                <form action="/add" method="POST"> ...
            --> NO NODE
                app.post('/add', fuunction(request, responce) { responce.send('FORMULÁRIO ENVIADO!!'); });

        --> BODY PARSER

            O body parser é um utilitário que serve para receber/pegar os dados de qualquer formulário.

            INSTALAÇÃO:

                npm install --save body-parser

            API:

                const bodyParser = require('body-parser');

            CONFIGURAÇÃO:
                Para configurar o bodyParser basta adicionar as seguintes linhas de código:

                    app.use(bodyParser.urlencoded({exended: false}));
                    app.use(bodyParser.json());

            UTILIZAÇÃO:

                Para pegar um dado de um formulário através do bodyParser basta seguir o comando abaixo,
                DENTRO DA ROTA:

                    request.body.nomeDoCampo

                OBS.: O nomeDoCampo é o nome dado à propriedade name="" existente no input!!

                EXEMPLO:

                    --> HTML

                        <input type="text" name="exemplo" placeholder="Exemplo"> ...

                    --> NODE.js --> Body Parser

                        app.post('/', (request, responce) => {
                            responce.send("Nome do exemplo: " + request.body.exemplo );
                        });
                    
                Desta forma conseguimos pegar os dados enviados de um formulário. Por isso é muito importante
                utilizar a propriedade name="" em todos os inputs existentes em um arquivo HTML. Caso essa
                propriedade name="" não seja definida ou tenha um nome diferente do que a rota espera, ocorrerá
                erro de 'undefined' (óbivio né). 

*/