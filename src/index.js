const { request, response } = require('express');
const express = require('express');

const app = express();

app.get("/ignite", (request, response) => {
    return response.json({message: "Hello Word!"});
})

app.listen(3333);