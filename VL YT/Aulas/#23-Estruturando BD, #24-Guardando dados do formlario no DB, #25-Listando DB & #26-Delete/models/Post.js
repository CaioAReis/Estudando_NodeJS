//  IMPORTANDO O ARQUIVO db.js
const db = require('./db');

//  CRIANDO TABELA
const Post = db.sequelize.define('postagens', {
    titulo: {
        type: db.Sequelize.STRING
    },
    conteudo: {
        type: db.Sequelize.TEXT
    }
});

// Post.sync({force: true});

module.exports = Post;