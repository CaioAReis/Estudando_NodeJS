const express = require("express");
const app = express();

// Parâmetros são valores dinâmicos passados pelo usuário.
// Para criar um parâmetro utiliza-se a seguinte sintaxe:
//          /:paramsName
// EXEMPLO: /:nome      --> Os 2 pontos significam a criação de um parâmetro 
app.get("/json/:nome/:sobrenome/:idade", function(request, responce) {
    responce.send(request.params);
});

app.get('/:nome/:sobrenome/:idade', function(request, responce) {
    responce.send(
        "O estudante " + request.params.nome +
        " " + request.params.sobrenome + " possui " + 
        request.params.idade + " anos!!");
});

app.listen(3333, function() {
    console.log("Servidor Rodando!!");
});

/* NO NAVEGADOR:

    Ao acessar o servidor no endereço localhost:3333 dará um erro de 'cannot GET /', pois ao criar um 
    parâmetro precisamos obrigatóriamente passar o parâmetro na chamada do servidor no navegador.
        EXEMPLO:
            --> Neste caso abaixo, ao acessar o servidor, será retornado todos os parâmetros como um arquivo um arquivo JSON.
            app.get("/:nome/:idade", function(request, responce) {
                responce.send(require.params);
            });

            --> Já neste caso abaixo será retornado como uma mensagem no HTML.
            app.get("/:nome/:idade", function(request, responce) {
                responce.send("O estudante " + request.params.nome + " possui " + request.params.idade + " anos!");
            });

            --> Já no navegador em vez de acessar o servidor desta forma:
                http: //localhost:3333
            --> O acesso será feito desta forma, por exemplo:
                http://localhost:3333/João/41

    --> IMPORTANTE!!
            A função send() só pode ser usado uma única vez por rota.
                --> Modo CERTO:
                app.get("/", function(req, res) {
                    res.send("Mensagem");
                });

                --> Modo ERRADO:
                app.get("/", function(req, res) {
                    res.send("Mensagem");
                    res.send("Mensagem");
                });

    --> AULA #09 - Nodemon
            
            O nodemon é uma ferramenta para executar os nossos projetos Node.js de uma forma contínua,
            sem a necessidade de ficar toda hora reiniciando o terminal do node para o desenvolvimento
            das aplicações WEB back-end utilizando o framework express no JavaScript.
            
            --> INSTALAÇÃO
                Para instalação do nodemon: 
                    npm install nodemon -g

                Após a instalação precisamos deixar de rodar os nossos pojetos com o node, e passar
                a usar o nodemon. Com isso sempre que o arquivo for salvo o nodemon reiniciará o servidor
                automaticamente.
*/