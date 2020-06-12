const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '*****',
    database: 'sitemaDeCadastro'
});

connection.connect(function(err) {
    if (err) throw err;
    console.log('Conectado!');
    var sql = "CREATE TABLE usuarios( nome VARCHAR(100), email VARCHAR(100), idade INT)";
    connection.query(sql, function(err, result) {
        if (err) throw err;
        console.log("Tabela Criada!");
    });
});

/*
    --> NO TERMINAL:
        A primeira coisa a se fazer é conectar-se ao servidor do MySQL
        através do comando:

            mysql -h localhost -u root -p

            -h : indicar qual servidor conectar.
            -u : parâmetro que pede o usuário (padrão root).
            -p : parâmetro que pede a senha.

        Após esses comandos, entraremos no ambiente do MySQL!!

        OBS.: No ambiente MySQL os camandos devem ser encerrados
        com ponto-e-vírgula (;). 

        O primeiro comando que devemos aprender é o SHOW DATABASES,
        que mostra/exibe todos os bancos de dados existentes dentro
        do MySQL.

        Para criar um banco de dados no MySQL utiliza-se o comando: 

            mysql>  CREATE DATABASE nomeDoBanco;

        Para acessar um banco de dados específico utiliza-se o comando:

            mysql> USE nomeDoBanco;

        Dentro de cada banco de dados existem estruturas de dados 
        chamadas tabelas. Tabelas essas que servem p/ guardar os dados.

        As tabelas são objetos de banco de dados que contêm todos os dados
        em um banco de dados. Nas tabelas, os dados são organizados de 
        maneira lógica em um formato de linha-e-coluna semelhante ao de 
        uma planilha.

        Cada coluna guarda um dado diferente.

        O SQL guarda dados no formato de tabelas:

        EXEMPLO: 

            Se um usuário se cadastrar na aplicação, seus dados 
            vão automáticamente para a tabela usuários e em seus
            respectivos lugares na tabela.

                          USUÁRIO:
            |   NOME    |   EMAIL   |   IDADE   |
            |-----------|-----------|-----------|           
            |    João   |   j@xx    |    32     |
            |    Zé     |   z@xx    |    12     |
            |    Ana    |   a@xx    |    21     |
            |           |           |           |

        E é basicamente assim que os dados são organizados em 
        uma tabela. E um banco de dados pode ter várias e várias
        tabelas, para guardar qualquer tipo de dados.

        Cada coluna dentro das tabelas possuem um tipo específico;
        alguns mais usados são: Strig, char, int, float, Date e Blob.

        --> Uma vez dentro de um banco nós podemos verificar quantas 
        tabelas existem dentro deste banco, atraves do comando:

            mysql> SHOW TABLES;

        Para criar tabelas dentro de um banco utiliza-se o comando:

            mysql> CREATE TABLE();

            Para a criação das colunas de uma tabela segue os passo abaixo:

                O 1º passo para a criação das colunas de uma tabela é definir seu nome.
                O 2º passo é definir o seu tipo. Para textos em geral utiliza-se VARCHAR().
                O 3º passo é definir o número de caractéres máximos que queremos aceitar
                dentro do banco, à depender do tipo da coluna.
                O 4º passo é simplesmente separar por (,) vírgula uma coluna da outra.

                EXEMPLO:

                    mysql> CREATE TABLE usuarios(       --> Criação da tabela
                        nome VARCHAR(100),              --> Criação da coluna NOME
                        email VARCHAR(100),             --> Criação da coluna EMAIL
                        idade INT                       --> Criação da coluna IDADE
                    );
*/