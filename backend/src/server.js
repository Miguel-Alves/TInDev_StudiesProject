const express = require('express');

const server = express();

server.get('/', (req, res) => {
    return res.json({ 
        message: `Tá saindo da jaula meu primeiro backend, poar! Muito bem vindo, ${req.query.name}`});
})

server.listen(3333)