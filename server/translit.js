

// const api = new openai.OpenAI({
//   apiKey: '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',
// });

// async function translateText(text, targetLang) {
//   const response = await api.chat.completions.create({
//     model: 'gpt-4',
//     messages: [
//       { role: 'system', content: 'You are a translator.' },
//       { role: 'user', content: `Translate to ${targetLang}: ${text}` },
//     ],
//   });

//   console.log(response.choices[0].message.content);
// }

// translateText('Hello world', 'Spanish');


const axios = require('axios');

const apiKey =
  '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'; // Получи ключ на https://openrouter.ai
const text = 'Привет, как дела?';

async function getAIResponse() {
  try {
    const response = await axios.post(
      'https://openrouter.ai/api/v1/chat/completions',
      {
        model: 'openai/gpt-4',
        messages: [{ role: 'user', content: text }],
      },
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
          'HTTP-Referer': 'http://localhost:3000', // Укажи домен своего проекта
          'X-Title': 'My AI Project',
        },
      },
    );

    console.log(response.data);
  } catch (error) {
    console.error('Ошибка:', error.response ? error.response.data : error);
  }
}

getAIResponse();




