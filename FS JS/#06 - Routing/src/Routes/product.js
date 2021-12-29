const express = require('express');

const routes = express.Router();

routes.get('/', (request, response) => {
    response.send("Você está na rota de produtos!!");
});

routes.get('/:id', (request, response) => {
    response.send("Você está na rota de PRODUCTS com ID");
});

routes.post("/", (request, response) => {
    response.status(200).json(request.body);
});

module.exports = routes;