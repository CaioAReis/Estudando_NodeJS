// OBS.: Para evitar erros é recomendável utilizar variáveis constantes,
// para previnir que as variáveis sejam sobrescritas.

// Carregando o módulo.
const express = require('express');

// Instanciando todo o framework p/ variável app;
// ou seja, qualquer comando do express vai sair a partir desta variável.
const app = express();


// Criando a rota principal da aplicação
app.get("/", function(request, responce) {
    responce.send("Página inicial da aplicação!!");
});

// Criando as rotas secundárias
app.get("/sobre", function(request, responce) {
    responce.send("Página sobre da apliação!!");
});

app.get("/detalhes", function(request, responce) {
    responce.send("Página de detalhes da aplicação!!");
});

app.get("/config", function(request, responce) {
    responce.send("Página de config da aplicação!!");
});

// Esta deve ser a ultima função da aplicação relacionada ao express.
// Qualquer coisa relacionado ao express abaixo desta função não irá funcionar. 
// Então toda aplicação deve estar acima desta função.
app.listen(3333, function() {
    console.log('Servidor Rodando!!');
    //localhost:3333
});

/*
    ROTAS:
    
    --> São basicamente os caminhos/percursos da aplicação.

    FUNÇÃO DE CALLBACK:

    --> O QUE É:
        É uma função que é executada sempre que algum evento acontece.
        Uma função callback é uma função passada a outra função como argumento, 
        que é então invocado dentro da função externa para completar 
        algum tipo de rotina ou ação.

    --> EXEMPLO: .listen()
        Sempre que esta função é executada, ela dispara um evento, e a partir do disparo
        deste evento nós podemos disparar um função.

    --> A maioria das funções do express, são funções de callback.

*/