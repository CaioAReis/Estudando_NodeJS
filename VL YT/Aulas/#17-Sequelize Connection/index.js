//  CONEXÃO AO BANCO MySQL COM O SEQUELIZA

//  Importando o módulo 'sequelize'
const Sequelize = require('sequelize');

// Conexão com o banco de dados é feita dentro parênteses abaixo:
// 1º PARÂMETRO: NOME do banco de dados p/ ser feita conexão.       --> STRING
// 2° PARÂMETRO: USUÁRIO do banco de dados (padrão root).           --> STRING
// 3º PARÂMETRO: SENHA de acesso ao banco de dados.                 --> STRING
// 4º PARÂMETRO: Um objeto JSON com 'host' e 'dialect'              --> JSON
// host: Pede em qual máquina/servidor está o banco de dados.       --> STRING
// dialect: Qual o tipo de dados (mysql)                            --> STRING
const sequelize = new Sequelize( 'sitemaDeCadastro', 'root', '*****', {
    host: 'localhost',
    dialect: 'mysql'
});

// Para saber se a conexão foi feita com sucesso ou não.
// Se a conexão for confirmada a função .then() caso contrário a função .catch() é chamada.
sequelize.authenticate().then(function() {
    console.log('Conectado com sucesso!!');
}).catch(function(err) {
    console.log('Erro de conexão: ' + err);
});

/*  SEQUELIZE

    O Sequelize é um ORM(Object-Relational Mapper) para Node.js, que tem suporte 
    aos bancos de dados PostgreSQL, MariaDB, MySQL, SQLite e MSSQL, como ORM ele
    faz o mapeamento de dados relacionais (tabelas, colunas e linhas) para objetos
    javascript.

    Ele permite criar, buscar, alterar e remover dados do bando de dados utilizando
    métodos JS, além de permitir a modificação da estrutura das tabelas, com isso
    temos muita facilidade tanto na criação, população e migração de banco de dados.

    INSTALAÇÃO:

        npm install --save sequelize

        npm install --save mysql2
*/