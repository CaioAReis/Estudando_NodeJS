var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "*****",
    database: "sistemaDeCadastro"
});

// DELETANDO NO DRIVER
connection.connect(function(err) {
    if (err) throw err;
    var sql = "DELETE FROM usuarios WHERE nome = 'Ze'";
    connection.query(sql, function(err, result) {
        if (err) throw err;
        console.log("Número de registros deletados: " + result.affectedRows)
    });
});

/*  DELETE

    --> Nós podemos excluir registros existentes em uma tabela usando
    a instrução "DELETE FROM".

    EXEMPLO DE USO:

        DELETE FROM usuarios WHERE nome = "Caio";

    --> Observe a cláusula WHERE na sintaxe DELETE. Ela especifica quais
    registros devem ser excluídos. Se você omitir a cláusula WHERE,
    TODOS os registros serão excluídos.
*/