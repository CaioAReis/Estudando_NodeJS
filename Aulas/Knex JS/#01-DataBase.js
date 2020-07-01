var knex = require('knex')({
    client: 'mysql2',
    connection: {
        host : '127.0.0.1',
        user : 'root',
        password : '*****',
        database : 'knexjs'
    }
});

module.exports = knex;

/*  Knex

    --> É um Query Builder SQL com "baterias incluídas" para Postgres , MSSQL , MySQL , MariaDB , 
    SQLite3 , Oracle e Amazon Redshift, projetado para ser flexível, portátil e divertido de usar.

    QUERY BUILDER

    --> Permite que você construa instruções SQL em um programático e independente o banco de dados.
    Comparado a escrever SQL à mão, usar query builder lhe ajudará a escrever um código SQL relacional
    mais legível e gerar declarações SQL mais seguras.

    INSTALAÇÃO

    --> O ambiente de destindo do Knex é o Node.js, primeiramente precisamos instalar a biblioteca do
    Knex, em seguida, instalar a biblioteca de danco de dados apropriada:

        $ npm install knex --save

        $ npm install pg
        $ npm install sqlite3
        $ npm install mysql
        $ npm install mysql2
        $ npm install oracledb
        $ npm install mssql

    INICIANDO A BIBLIOTECA

    O próprio módulo do Knex é uma função que recebe um objeto de configuração do Knex, aceitando alguns 
    parâmetros. O parâmetro client é necessário e determina qual adaptador cliente será usado com a biblioteca.

        var knex = require('knex')({
            client: 'mysql',
            connection: {
                host : '127.0.0.1',
                user : 'your_database_user',
                password : 'your_database_password',
                database : 'myapp_test'
            }
        });
*/