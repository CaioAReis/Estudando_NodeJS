var express = require('express');
var app = express();

app.get('/', function(request, responce){
    responce.send('Ola Mundo');
});

var server = app.listen(3333);

/*  EXPRESS

--> O QUE É:
    É um framework minimalista e flexível para Node.js. Ele contém um robusto conjunto de recursos para
    desenvolver aplicações web, como um sistema de Views intuitivo (MVC), um robusto sistema de roteamento,
    um executável para geração de aplicações e mito mais.

--> INSTALAÇÃO:
    Para iniciar o desenvolvimento com o Express primeiro é preciso instalá-lo, existe muitas formas de
    fazer isso, porém a mais fácil é através do NPM.
        $ npm install express --safe

--> APLICANDO O EXPRESS
    A primeira coisa a se fazer é importar o módulo do express e criar um app:
    EXEMPLO:
        var express = require('express');
        var app = express();
*/