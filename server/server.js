const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;
const dalleController = require('./controllers/dalleController.js'); // adjust the path according to your project structure
app.use(cors());


app.get('/generateOutfit', async (req, res) => {
    try {
        const image = await dalleController.generateOutfit(req.query.outfitDescription);
        res.send({ url: image.data[0].url });
    } catch (error) {
        res.status(500).send({ error: error.toString() });
    }
});

//JUST FOR TESTING DALL-E
app.get('/', (req, res) => {
    res.send('Hello World!')
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