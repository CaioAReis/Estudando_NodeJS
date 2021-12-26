// O código abaixo cria uma conexão com o banco de dados.
// Usando usuário e senha do seu banco de dados MySQL.

var mysql = require('mysql');

var connection = mysql.createConnection({
  host: "localhost",
  user: "yourusername",         // --> root
  password: "yourpasword"       // --> *****
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

/*
    --> O Node.js pode ser usado em aplicações de 
    banco de dados.

    O banco de dados é a organização e armazenagem 
    de informações sobre um domínio específico. 
    De forma mais simples, é o agrupamento de dados
    que tratam do mesmo assunto, e que precisam ser 
    armazenados para segurança ou conferência futura.

    Um dos bancos de dados mais populares é o MySQL.

    --> OBS.: Para seguir com os estudos a partir daqui
    devemos ter o MySQL instado no nosso computador.
    Ele pode ser baixado gratuitamente em:

        https://www.mysql.com/downloads/

    --> INSTALANDO O DRIVER MySQL 

        Depois de ter o MySQL instalado e funcionando no
        computador, precisamos acessá-lo usando o Node.js.

        Para acessar o banco de dados do MySQL com o Node,
        precisamos de um driver MySQL, baixado através do
        npm, pelo seguinte comando:

            npm install mysql

        Depois de baixado e instalado o driver MySQL, o
        Node.js pode usar este módulo para manipular o
        banco de dados MySQL.

            const mySQL = require("mysql");

*/