var somaFunc = require('./soma');
var subFunc = require('./sub');
var multFunc = require('./multi');
var divFunc = require('./div');

console.log('Soma: ' + somaFunc(1,4));
console.log('Subtração: ' + subFunc(5,4));
console.log('Multiplicação: ' + multFunc(8,4));
console.log('Divisão: ' + divFunc(8,4));

/*  MÓDULOS

--> O QUE É:
    São como as bibliotecas do JavaScript.
    Os módulos são um conjunto de funções que você pode incluir na sua aplicação.

--> INCLUIR MÓDULOS:
    Para incluir um módulo a sua aplicação usa-se a função require() e o nome do módulo.
    EXEMPLO: 
        --> var http = require('http');
    A partir daí sua aplicação será capaz de acessar o módulo chamado.

--> MÓDULOS EXTERNOS:
    Podemos criar nossos próprios módulos e incluí-los facilmente nas aplicações.
    EXEMPLO:
        --> ARQUIVO EXTERNO soma.js
            var soma = function (a,b) { return a + b; }
            module.exports = soma;
                OU
            exports.soma = function (a,b) { return a + b; }
        Usa-se a palavra-chave 'module.exports' para disponibilizar propriedades e métodos
        fora do arquivo do módulo. 

*/