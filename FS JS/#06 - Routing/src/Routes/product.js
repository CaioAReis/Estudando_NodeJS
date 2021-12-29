const express = require('express');

const routes = express.Router();

routes.get('/', (request, response) => {
    response.send("Você está na rota de produtos!!");
});

routes.get('/:id', (request, response) => {
    response.send("Você está na rota de PRODUCTS com ID");
});

module.exports = routes;