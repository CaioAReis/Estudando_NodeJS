// IMPORTANDO DB
const database = require('../#01-DataBase');

//  FILTRANDO A BUSCA COM O WHERE
database.select().from('games').where('preco', '<', 40).then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
});

/*  WHERE

    --> Existem várias funções para auxiliar na cláusula dinâmica WHERE. Em muitos casos, funções podem ser 
    usadas no lugar de valores, construindo subconsultas. 

    OBS.: Fornecer ao Knex um valor undefined para qualquer uma das funções WHERE fará com que o Knex gere um
    erro durante durante a compilação do SQL. Isso é para o nosso bem. O Knex não pode saber o que fazer com
    valores indefinidos em uma instrução WHERE, pois ele considera uma erro programático.

    --> Para se utilizar o WHERE basta seguir o exemplo:

        database.select('*').from('games').where('id', 5);  1º PARAMETRO: coluna, 2º PARAMETRO: valor desejado

            OU

        database.select('*').from('games').where({
            'id': 5
        });

        SAÍDA EQUIVALENTE:

        SELECT * FROM games WHERE id = 5;

    --> WHERE COM OPERADOR

        1º parâmetro contem a coluna a ser filtrada
        O 2º parâmetro do where pode conter qualquer operador: <, >, =, >=, <=, <>
        3º parâmetro recebe o valor a ser filtrado na coluna.

        database.select('*').from('games').where('id', '>', 5);

        SAÍDA EQUIVALENTE:

        SELECT * FROM games WHERE id > 5;

    --> WHERE COM OS OPERADORES LÓGICOS AND e OR:

        database.select('*').from('games').where('id', 5).orWhere('nome', 'Pokemon');

        SAÍDA EQUIVALENTE:

        SELEC * FROM games WHERE id = 5 OR nome = 'Pokemon';

        database.select('*').from('games').where('id', 5).andWhere('nome', 'Pokemon');

        SAÍDA EQUIVALENTE:

        SELEC * FROM games WHERE id = 5 AND nome = 'Pokemon';

    --> PARA UM COMANDO WHERE QUE 'LIMITE' A UTILIZAÇÃO DO KNEX EXISTE A FUNÇÃO .raw() COM ELA PODEDMOS
    ESCREVER O COMANDO SQL 'CRU' DESEJADO.

    EXEMPLO:

    database.raw('SELECT * FROM games WHERE name = "Pokemon" OR id = 3');

*/