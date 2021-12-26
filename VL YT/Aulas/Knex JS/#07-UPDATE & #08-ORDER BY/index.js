//  IMPORTANDO DB
const database = require('../#01-DataBase');

//  ATUALIZANDO REGISTO E MOSTRANDO TABELA
database.table('games').update({preco: 10.90}).where({id: 10}).then(() => {
    database.select().from('games').then(data => {
        console.log(data);
    }).catch(err => {
        console.log(err);
    });
}).catch(err => {
    console.log(err);
});

//  ORDER BY
database.select().from('games').orderBy('preco', 'asc').then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
});

/*  UPDATE ->  .update(data, [returning]) OU .update(key, value, [returning]

    --> Para utilizar o UPDATE basta passar um JSON com os campos que desejamos alterar update({}):

        EXEMPLO PARA MULTIPLAS ATUALIZAÇÕES: 

            database.update({preco: 20})from('games').where({id: 5});

        EXEMPLO PARA UNICA ATUALIZAÇÃO:

            database.update('preco', 120).from('games').where({id: 12});
*/

/*  ORDER BY ->    .orderBy(column|columns, [direction])

    --> Para ordenar uma consulta basta seguir o seguuinte exemplo:

        asc --> PARA CRESCENTE
        desc --> PARA DECRESCENTE

    --> COLUNA ÚNICA:

            database.select().from('games').orderBy('nome', 'desc');
        
        EQUIVALENTE:

            SELECT * FROM games ORDER BY nome DESC;
*/