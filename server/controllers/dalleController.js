const { OpenAI } = require('openai');
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../../.env') });

const openai = new OpenAI(process.env.OPENAI_API_KEY);


/**
 * Generates an image based on the provided outfit description.
 *
 * @param {string} outfitDescription - The description of the outfit to generate an image for.
 * @returns {Promise<object>} A promise that resolves to an object containing the generated image data.
 * @throws {Error} Will throw an error if the image generation fails.
 *
 * @example
 * 
 * generateOutfit('pancakes with blueberries and strawberries')
 *   .then(image => console.log(image))
 *   .catch(error => console.error(error));
 * 
 * image.url returns the url to the image
 */
async function generateOutfit(outfitDescription) {
    const image = await openai.images.generate({ model: "dall-e-3", prompt: outfitDescription });
    return image;
}

module.exports = {
    generateOutfit
};
