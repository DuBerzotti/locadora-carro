const { request, response, json } = require('express');
const express = require('express');
const { v4: uuidv4 } = require('uuid');

const app = express();

app.use(express.json());

//Array de de usuários/contas
const customers = [];

app.post("/account", (request, response) => {
    const {cpf, name} = request.body;

    const customerAlreadyExists = customers.some(
        (customer) => customer.cpf === cpf
    );

    if(customerAlreadyExists) {
        return response.status(400).json({error: "Customer already exists!"});
    }

    customers.push({
        cpf,
        name,
        id: uuidv4(),
        statement : []
    });

    return response.status(201).send();

});

app.get("/courses", (request, response) => {

    const query = request.query;

    console.log(query);

    return response.json(["Curso 1", "Curso 2", "Curso 3"]);
});

app.put("/courses/:id", (request, response) => {

    const {id} = request.params;

    console.log(id);

    return response.json(["Curso 6", "Curso 2", "Curso 3", "Curso 4"]);
});

app.patch("/courses/:id", (request, response) => {
    return response.json(["Curso 6", "Curso 7", "Curso 3", "Curso 4"]);
});

app.delete("/courses/:id", (request, response) => {
    return response.json(["Curso 6", "Curso 7", "Curso 4"]);
});

app.listen(3333);