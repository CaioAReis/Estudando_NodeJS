var http = require('http');

http.createServer(function(request, response) {
    response.end('Hello NodeJS');
}).listen(3333);

console.log('Server Running');

/* HTTP
    O node.js possui um módulo chamado HTTP, que permite o node transferir dados pelo 
    HTTP (Hyper Text Transfer Protocol).
    Para incluir o módulo HTTP, usa-se o método require():

        var http = require('http');

    O médulo HTTP pode criar um servidor HTTP que escute as portas do servidor e dê uma
    resposta de volta ao cliente, usando o método createServer() criamos um servidor HTTP.
    EXEMPLO:
    
        var http = require('http');                         --> Chamada do módulo HTTP
        http.createServer(function(request, responce) {     --> Cria o servidor HTTP
            responce.write('Hello world');                  --> Escreve uma resposta p/ o cliente
            responce.end();                                 --> Termina a resposta / também escreve uma resposta
        }).listen(3333);                                    --> Define a porta a ser ouvida pelo servidor

    Ao rodar a aplicação o resultado poderá ser visto no endereço: http://localhost:3333
*/