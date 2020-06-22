// IMPORTANDO O MÓDULO DO SEQUELIZE
const Sequelize = require('sequelize');

//  FAZENDO CONECÇÃO COM O BANCO DE DADOS MySQL
const sequelize = new Sequelize('postAPP', 'root', 'c1998', {
    host: 'localhost',
    dialect: 'mysql'
});

//  EXPORTANDO
module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}