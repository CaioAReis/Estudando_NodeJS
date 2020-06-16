var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '*****',
    database: 'sistemaDeCadastro'
});

// ORDER BY
connection.connect(function(err) {
    if (err) throw err;
    connection.query("SELECT * FROM usuarios ORDER BY idade", function(err, result) {
        if (err) throw err;
        console.log(result);
    });
});

/*  ORDER BY

    --> Utiliza-se a instrução ORDER BY para ordenar o resultado em crescente ou decrescente.

    A instrução ORDER BY ordena o resultado como crescente por padrão. Para ordenar o resltado 
    em decrescente, usa-se a instrução DESC.
    
    ASC --> CRESCENTE
    DESC --> DECRESCENTE

    SINTAXE:

        SELECT * FROM nomeDaTabela ORDER BY nomeDaColuna;

    EXEMPLOS: 

        SELECT * FROM usuarios ORDER BY idade;

        SELECT * FROM usuarios ORDER BY nome DESC;
*/

// DROP TABLE
connection.connect(function(err) {
    if (err) throw err;
    connection.query("DROP TABLE usuarios", function(err, result) {
        if (err) throw err;
        console.log("Tabela Deletada!");
    });
});

/*  DROP TABLE

    --> Utiliza-se a instrução DROP TABLE para deletar uma tabela existente.

    SINTAXE:

        DROP TABLE nomeDaTabela;

    EXEMPLO:

        DROP TABLE usuarios;
*/

//  LIMIT
connection.connect(function(err) {
    if (err) throw err;
    connection.query("SELECT * FROM usuarios LIMIT 5", function(err, result) {
        if (err) throw err;
        console.log(result);
    });
});

/*  LIMIT

    --> Nós podemos limitar o número de registros a ser exibido na busca,
    usando a instrução LIMIT.

    SINTAXE:

        SELECT * FROM nomeDaTabela LIMIT valor;

    EXEMPLO:

        SELECT * FROM usuarios LIMIT 3;

        SELECT * FROM usuarios LIMIT 6;

    --> Se você deseja retornar um número de registros, começando de uma 
    posição determinada nos registros, precisamos utilizar a palavra-chave OFFSET.

    EXEMPLO:

        --> Retornando 5 usuários começando da terceira posição dos registros.

        SELECT * FROM usuarios LIMIT 5 OFFSET 2;

        OBS.: OFFSET começa na posição 0.

    SINTAXE MAIS CURTA:

        SELECT * FROM usuarios LIMIT 2, 5;

        OBS.: Os números são invertidos: "LIMIT 2, 5" é o
        mesmo que LIMIT 5 OFFSET 2;
*/