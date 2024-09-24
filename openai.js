const { Configuration, OpenAIApi } = require("openai");
require('dotenv').config()

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const runCompletion = async () => {
    try {
    console.log('AAAAAAAAAAAA');
    
    const completion = await openai.createCompletion({
        model: "text-davinci-002",
        prompt: "O Palmeiras tem mundial?",
        max_tokens: 1000
    });

    console.log('>>> ', completion.data);
    console.log('>>> ', completion.data.choices[0].text);

    return 'Ok';
  } catch (err) {
    console.error('Erro :( ', err);
    return 'Erro :(';
  }
};


module.exports = {
    runCompletion,
};