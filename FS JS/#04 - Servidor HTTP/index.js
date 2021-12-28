const http = require('http');
const fs = require('fs');

//  PORT on browser: http://localhost://3333
http.createServer((request, response) => {  //  Criando o servidor
    
    console.log(request.method);    //  Mostrando requisição feita (GET)
    console.log(request.url);       //  Mostrando a URL acessada
    response.writeHead(200, {"Content-Type": "text/html"}); //  Response Header
    response.write("EAE MAN!!");    //  Escreve uma resposta para o cliente
    //  Brincando o File System module e HTTP
    fs.readFile('index.html', (err, arquivo) => {
        if (err) return err;    //  Verificando se o arquivo foi encontrado
        response.write(arquivo);    // Exibindo o arquivo no browser
        response.end("\nHello world, NODE.JS"); //  Escreve a mensagem e encerra a resposta
    });
}).listen(3333, () => console.log("Server is running!"));   // Porta a ser ouvida

