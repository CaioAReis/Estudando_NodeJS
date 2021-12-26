var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '*****',
    database: 'sistemaDeCadastro'
});

connection.connect(function(err) {
    if (err) throw err;
    var sql = "UPDATE usuarios SET idade = 22 WHERE nome = 'Caio'";
    connection.query(sql, function(err, result) {
        if (err) throw err;
        console.log(result.affectedRows + " registro(s) atualizados!")
    })
});

/*  UPDATE

    --> Nós podemos atualizar registros existentes em uma tabela usando 
    a instrução "UPDATE"

    SINTAXE:

        UPDATE nomeDaTabela SET nomeDaColuna = (Novo valor) WHERE nomeDaColuna = (Antigo valor);

    EXEMPLO:

        UPDATE usuarios SET nome = "Fernanda" WHERE nome = "Caio";
    
    TAMBÉM ASSIM:

        UPDATE usuarios 
            SET     nome = "Fernanda",  sobrenome = "Santos",   idade = 20 
            WHERE   nome = "Caio",      sobrenome = "Almeida",  idade = 21;
    
    OBSERVE a instrução WHERE na sintaxe UPDATE: Ela especifica qual, ou quais, registros devem ser
    atualizados. Com a omissão da instrução WHERE, TODOS os registros serão atualizados. 
*/