import OpenAI from "openai";

main();

const express = require('express');
const app = express();
const port = 3000;
const axios = require('axios');


//JUST FOR TESTING DALL-E
app.get('/', (req, res) => {
    
});

app.get('/outfits', (req, res) => {
    res.send('Hello World!')
});

app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});