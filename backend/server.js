
require('dotenv').config();
const express = require('express');
const app = express();

const HOST = process.env.HOST;
const PORT = process.env.PORT;

app.get('/', (request, response) => {
    response.send('Welcome to Codepop! An Online Coding Quiz');
});

app.listen(PORT, HOST, () => {
    console.log(`Listening On ${HOST}:${PORT}`);
})