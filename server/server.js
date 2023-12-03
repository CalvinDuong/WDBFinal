const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3000;
const dalleController = require('./controllers/dalleController.js'); // adjust the path according to your project structure
app.use(cors());

// Login
app.use(session({ secret: 'your secret key', resave: false, saveUninitialized: true }));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/login', (req, res) => {
    res.send(`
        <form method="post" action="/login">
            <label>
                Username:
                <input type="text" name="username" required>
            </label>
            <label>
                Password:
                <input type="password" name="password" required>
            </label>
            <button type="submit">Log in</button>
        </form>
    `);
});

app.post('/login', (req, res) => {
    const { username, password } = req.body;

    // Validate the user's credentials. This is just a simple example, in a real application you would check these credentials against a database.
    if (username === 'user' && password === 'pass') {
        req.session.userId = username;
        res.send('Logged in!');
    } else {
        res.send('Invalid username or password');
    }
});



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