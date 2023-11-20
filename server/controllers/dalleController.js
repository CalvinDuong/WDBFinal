const { OpenAI } = require('openai');
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../../.env') });

const openai = new OpenAI(process.env.OPENAI_API_KEY);

async function generateOutfit(outfitDescription) {
    return await openai.images.generate({ model: "dall-e-3", prompt: outfitDescription }).url;
}
