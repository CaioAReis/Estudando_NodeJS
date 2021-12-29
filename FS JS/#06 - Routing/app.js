const express = require("express");

const userRouter = require("./src/Routes/user");
const productRouter = require("./src/Routes/product");

const app = express();

app.use(express.json());

//  http://localhost:3333/
app.get("/hello", (request, response) => {
    response.send("EAE!! Se você tá lendo isso, FUNCIONOU!");
});

//  http://localhost:3333/users
app.use("/users",userRouter);
//  http://localhost:3333/products
app.use("/products", productRouter);

app.listen(3333, () => console.log("Server is running!"));