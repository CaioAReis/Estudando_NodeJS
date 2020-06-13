var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "*****",
    database: "sistemaDeCadastro"
});

// INSERINDO DADOS PELO DRIVE MySQL
connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "INSERT INTO usuarios (nome, sobrenome, idade) VALUES ('Caio', 'Almeida', 21)";
    connection.query(sql, function (err, result) {
      if (err) throw err;
      console.log("1 record inserted");
    });
  });

// SELECIONANDO DADOS PELO DRIVER MySQL
connection.connect(function(err) {
    if (err) throw err;
    connection.query("SELECT * FROM usuarios", function (err, result, fields) {
      if (err) throw err;
      console.log(result);
    });
  });

// SELECIONANDO DADOS ESPECÍFICOS PELO DRIVER MySQL
connection.connect(function(err) {
    if (err) throw err;
    connection.query("SELECT nome, idade FROM usuarios", function (err, result, fields) {
        if (err) throw err;
        console.log(result);
    });
});

// SELECIONANDO DADOS ESPECÍFICOS COM A INSTRUÇÃO WHERE
connection.connect(function(err) {
    if (err) throw err;
    connection.query("SELECT * FROM usuarios WHERE idade = 21", function (err, result, fields) {
        if (err) throw err;
        console.log(result);
    });
});

/*
    Para inserir dados em uma tabela utiliza-se o comando:

        mysql> INSERT INTO nomeDaTabela() VALUES();

    --> Entre os parênteses da tabela "nomeDaTabela()", deve-se ser informado as colunas 
    que irão receber os dados.

    --> Já entre os parênteses de "VALUES()", deve-se ser informado os valores que cada
    coluna irá receber respectivamente.

    EXEMPLO:

        INSERT INTO usuarios(nome, sobrenome, idade) VALUES(
            "Caio",
            "Almeida",
            21
        );

    Agora que sabemos inserir dados em uma tabela, precisamos saber como listar esses dados.
    E para fazer isso utiliza-se o comando:

            SELECT nomeDosDados FROM nomeDaTabela;

            EXEMPLO:

                SELECT * FROM usuarios;

    --> A instrução SELECT serve para listar os dados. 
    --> Já o * representa todas as colunas (os dados) de uma tabela.
    --> A instrução FROM pede a tabela a ter os dados listados.

    Para selecionar apenas algumas das colunas em uma tabela, 
    use a instrução "SELECT" seguida do nome da coluna.

    EXEMPLO: 
            
            SELECT name, idade FROM usuarios;

    --> SELECT com filtro:

            Ao selecionar registros de uma tabela, podemos filtrar a seleção
            usando a instrução "WHERE".

            EXEMPLOS:

                SELECT * FROM usuarios WHERE idade = 21;

                SELECT * FROM usuarios WHERE idade > 30;

                SELECT * FROM usuarios WHERE nome = "Caio";

                SELECT * FROM usuarios WHERE sobrenome = "Romero";
*/