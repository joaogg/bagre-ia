const express = require('express');
const openai = require('./openai');


const app = express();
const port = 3000;

app.get('/', async (req, res) => {
    await openai.runCompletion();
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});