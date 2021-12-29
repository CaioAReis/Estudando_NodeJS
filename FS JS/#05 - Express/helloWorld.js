const express = require('express');

const app = express();

//  http://localhost:3333/
app.get('/', (request, response) => {
    response.send("Hello World EXPRESS!!");
});

//  http://localhost:3333/user
app.get('/user', (request, response) => {
    response.send("Exemplo de página de usuário!!");
});

//  Retornando JSON
//  http://localhost:3333/json
app.get('/json', (request, response) => {
    const data = { id: 001, name: "Bulbasaur" };
    response.json(data);
});

app.listen(3333, () => console.log("The server is running!"));