const express = require('express');

const routes = express.Router();

routes.get('/', async (request, response) => {
    response.send("Hello!!");
});

routes.get("/:id", (request, response) => {
    response.send("Você está na rota USER com o ID: " + request.params.id);
});

routes.post("/", (request, response) => {
    const data = {
        "message": "POST request OK",
        ...request.body
    };
    response.status(200).json(data);
});

routes.put("/:id", (request, response) => {
    const data = {
        "message": "PUT request OK",
        "ID": request.params.id,
        ...request.body
    };
    response.status(200).json(data);
});

routes.delete("/:id", (request, response) => {
    const data = {
        "message": "DELETE request OK",
        "ID": request.params.id
    };
    response.status(200).json(data);
});

module.exports = routes;
