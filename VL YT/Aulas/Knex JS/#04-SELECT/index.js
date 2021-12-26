//  IMPORTANDO DB
const database = require('../#01-DataBase');

//  SELECT
database.select('*').from('games').then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
});

//  NESTED QUERIES

// database.insert({nome: 'Skyrim', preco: 50}).into('games').then(data => {
//     database.select().from('games').then(data => {
//         console.log(data);
//     }).catch(err => {
//         console.log(err);
//     })
// }).catch(err => {
//     console.log(err);
// });

/*  SELECT

    --> Para criar uma consulta de seleção, utilizando um array opcional de colunas para a consulta,
    eventualmente assumindo o padrão * se nenhum for especificado quando a consulta for feita.
    A resposta para a chamada de um select será um array de objetos selecionados no banco de dados.

    EXEMPLO:

        database.select().from('users');
            OU
        database.select().table('users');
            EQUIVALENTE:
        SELECT * FROM users;

    .select()   --> Método para receber os campos a serem selecionados na consulta.
    .from()     --> Método que recebe a tabela a ser consultada no banco de dados.
    .table()    --> Método que recebe a tabela a ser consultada no banco de dados.

    --> Para consultas específicas segue a estrutura abaixo, como exemplo:

    database.select('title', 'author', 'year').from('books');
        EQUIVALENTE:
    SELECT title, author, year FROM books;

    EXEMPLO COMPLETO:

        database.select().from().then(data => {
            console.log(data);
        }).catch(err => {
            console.log(err);
        });

    --> PODEMOS INSERIR QUERYS DENTRO DE OUTRA QUERY, ISSO É CHAMADO DE NESTED QUERIES:
    EXEMPLO:

    //  INSERT
        database.insert(dados).into('users').then(data => {

            //  SELECT
            database.select().from('users').then(data => {
                console.log(data);
            }).catch(err => {
                console.log(err);
            });

        }).catch(err => {
            console.log(err);
        });
*/