//  IMPORTANDO O EXPRESS
const express = require('express');
const app = express();
//  IMPORTANDO HANDLEBARS
const handlebars = require('express-handlebars');
//  IMPORTANDO SEQUELIZE
const Sequelize = require('sequelize');

// CONFIG
    //  TEMPLATE ENGINE
        app.engine('handlebars', handlebars({defaultLayout: 'main'}));
        app.set('view engine', 'handlebars');

    //  CRIANDO CONEXÃO COM O BANCO DE DADOS MySQL
    const sequelize = new Sequelize('testBASE', 'root', '*****', {
        host: 'localhost',
        dialect: 'mysql'
    });

app.listen(3333, () => {console.log("Servidor Rodando!!")});

/*  HANDLEBARS

    --> O que é HandleBars

        É uma simples linguagem de modelo.
        
        Ele usa um modelo e uma entrada de objetos para gerar HTML ou qualquer outro formato de texto.
        O modelo HandleBars parece um texto normal com expressões incorporadas no HandleBars.

        NO HTML:

            <p> {{firtName}} {{lastName}} </p>

        Uma expressão HandleBars é um {{ (<--abre CHAVES), alguns conteúdos, seguidos por (fecha CHAVES -->) }}.
        Como mostra o exemplo acima. Quando o modelo é executado, estas expressões são substituídas por valores
        de um objeto de entrada.

    --> INSTALAÇÃO

        npm install --save express-handlebars

    --> CONFIGURAÇÃO

        Precisamos configurar o HandleBars pois o express precisa saber qual o Template Engine usar, pois existem
        várias e várias no mercado. E para fazer isso, segue os comandos abaixo:

            app.engine('handlebars', handlebars({defaultLayout: 'main'}));
            app.set('view engine', 'handlebars');

        Sobre Template Engine: Basicamente, uma template engine serve para 
        facilitar a criação de páginas HTML e tornar o envio e exibição de 
        informações para estas páginas um processo mais simples e organizado.
        
        --> Agora precisamos criar uma pasta chamada 'views' na raiz do projeto, e dentro dela outra pasta chamada 'layouts'.
        E dentro da pasta layouts um arquivo chamado 'main.handlebars'.

        Este arquivo main representa o template padrão da aplicação.
*/