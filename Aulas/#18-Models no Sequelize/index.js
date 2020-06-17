// IMPORTANDO O MÓDULO
const Sequelize = require('sequelize');

// CONEXÃO COM O MySQL
const sequelize = new Sequelize('testBASE', 'root', 'c1998', {
    host: 'localhost',
    dialect: 'mysql'
});

//  CRIANDO TABELAS

//  Criando um model de postagens
const Postagem = sequelize.define('postagens', {
    título: {
        type: Sequelize.STRING      // EQUIVALENTE AO VARCHAR
    },
    conteudo: {
        type: Sequelize.TEXT
    }
});
//  OBS.: A diferença entre STRING e TEXT é que a STRING é limitada, enquanto o TEXT não.

//  CRIANDO REGISTRO
Postagem.create({
    título: "Firt post",
    conteudo: "AUSHDHA ashudua asdhosa oasihdoasi dosoahsd osahd"
});

//  SINCRONIZANDO COM O MySQL
// Postagem.sync({force: true});

//  Criando model de usuários
const Usuarios = sequelize.define('usuarios', {
    nome: {
        type: Sequelize.STRING
    },
    sobrenome: {
        type: Sequelize.STRING
    },
    idade: {
        type: Sequelize.INTEGER
    },
    email: {
        type: Sequelize.STRING
    }
});

//  SINCRONIZANDO COM O MySQL
// Usuarios.sync({force: true});

// CRIANDO REGISTRO
Usuarios.create({
    nome: "Caio",
    sobrenome: "Almeida",
    idade: 21,
    email: "test@mail.com"
});

/*
    MODELS

    Um MODEL representa uma tabela no banco de dados dentro do sequelize.
    As instâncias destas classes representam as linhas das tabelas no banco
    de dados. 

    --> CRIANDO TABELAS

        Criando um model da tabela
        Para criar um model chama-se a função sequelize.define() dentro de uma variável e com isso definimos um modelo/tabela.
        1º PARÂMETRO: NOME da tabela
        2º PARÂMETRO: JSON com a definição das colunas da seguinte forma: coluna1: {type: Sequelize.TIPO }

        EXEMPLO:

            const NomeDoModelDaTabela = sequelize.define("nomeDaTabela", {
                coluna1: {
                    type: Sequelize.TIPOdaColuna
                },
                coluna2: {
                    type: Sequelize.TIPOdaColuna
                }
            });

    --> SINCRONIZANDO AS TABELAS AO BANCO DE DADOS MySQL

        Para gerar este model diretamente no MySQL basta chamar a variável que representa o model 
        da tal tabela e adicionar a função .sync({force: true}). Esta função é responsável pela 
        sincronização entre o MODEL e o banco de dados MySQL. Já o argumento JSON {'force: true'} 
        garante que a tabela seja criada.

        EXEMPLO:
            
            NomeDoModelDaTabela.sync({force: true});

            OBS.: Após rodar o comando acima, é recomendável apagar ou comentá-lo, 
            pois o comando pode recriar a tabela apagando todos os registros salvos.


    --> INSERINDO DADOS

        Para inserir registros em uma tabela, basta chamar a variável que representa o model da tal tabela
        e adicionar a função .create(). E como parâmetro um objeto JSON com a definição dos valores de cada
        coluna, disposto da seguinte forma: .create({ coluna1: VALORdaColuna });

        EXEMPLO:

            NomeDoModelDaTabela.create({ coluna1: VALORdaColuna, coluna2: VALORdaColuna });
            
*/