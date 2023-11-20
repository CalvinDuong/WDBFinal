const { OpenAI } = require('openai');
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../../.env') });

const openai = new OpenAI(process.env.OPENAI_API_KEY);

async function main() {
    const image = await openai.images.generate({ model: "dall-e-3", prompt: "A beaver building a log house in the snow and eating pancakes." });

    console.log(image.data);
}

main();