// INPORTANDO DB
const database = require('../#01-DataBase');

// DEFININDO DADOS
var dados = [
    {
        nome: 'Pokemon - Blue',
        preco: 23.54
    },
    {
        nome: 'Digimon World',
        preco: 56.32
    },
    {
        nome: 'Chrono Trigger',
        preco: 34.12
    },
    {
        nome: 'Dragon ball Z - Budokai 3',
        preco: 56.87
    },
    {
        nome: 'Need for Speed',
        preco: 78
    },
    {
        nome: 'Resident Evil 3',
        preco: 21.50
    },
    {
        nome: 'Dark Souls',
        preco: 60
    },
    {
        nome: 'BomberMan 4',
        preco: 30.56
    }
];

database.insert(dados).into('games').then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
});



/* INSER --> Knex

    Para fazer uma query de insert é muito simples:

    Primeiramente precisamos definir os dados a serem inseridos na tabela:
    EXEMPLO:

        var dados = {
            nome: 'Chrono Trigger'
            preco: 34.54
        }

    Também podemos definir multiplos dados para uma tabela da seguinte forma:

        var dados = [
            {
                nome: 'Pokemon',
                preco: 23.54
            },
            {
                nome: 'Resident Evil',
                preco: 12,40
            },
            {
                nome: 'Digimon World',
                preco: 43
            }
        ];

    Após a definição dos dados precisamos chamar o banco de dados e passar as seguintes funções:

        database.insert().into()

    .insert() --> Função responsável por receber os dados a serem inseridos na tabela.
    .into()   --> Função responsável por identifical a tabela à qual receberá os dados.
    EXEMPLO:

        database.insert(dados).into('games');

    OBS.: Os query builder sempre retornam uma promise, então o código acima também pode ser escrito
    da seguinte forma:
    
        database.inser(dados).into('games').then(data => {
            console.log(data);
        }).catch(err => {
            console.log(err);
        });

*/