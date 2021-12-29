const express = require('express');

const routes = express.Router();

routes.get('/', (request, response) => {
    response.send("Você está na rota USER!!");
});

routes.get("/:id", (request, response) => {
    response.send("Você está na rota USER com o ID");
});

module.exports = routes;
