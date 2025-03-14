// require('dotenv').config();
// const API_URL = 'https://llm.api.cloud.yandex.net/foundationModels/v1/completion';
// const FOLDER_ID = process.env.YANDEX_FOLDER_ID;
// const YandexAuth = require('./src/services/YandexAuth');

// async function generateSentence(word) {
//   const response = await fetch(API_URL, {
//     method: 'POST',
//     headers: {
//       Authorization: `Bearer ${await YandexAuth.getIamToken()}`,
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({
//       modelUri: `gpt://${FOLDER_ID}/yandexgpt/latest`,
//       completionOptions: {
//         stream: false,
//         temperature: 0.6,
//         maxTokens: 100,
//       },
//       messages: [
//         {
//           role: 'user',
//           text: `Составь осмысленное предложение с использованием слова "${word}" и перевод предложения. Результат пришли в виде массива из двух элементов, предложения с большой буквы:`,
//         },
//       ],
//     }),
//   });
//   const data = await response.json();
//   return data.result.alternatives[0].message.text;
// }
// generateSentence('beavers').then((data) => console.log(data));

// const API_URL = 'https://llm.api.cloud.yandex.net/foundationModels/v1/completion';
// const FOLDER_ID = 'b1ggra6on9uq4vsogm10';
// const YandexAuth = require('./src/services/YandexAuth');
// async function translateText(word, targetLanguage) {
//   const response = await fetch(API_URL, {
//     method: 'POST',
//     headers: {
//       Authorization: `Bearer ${await YandexAuth.getIamToken()}`,
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({
//       modelUri: `gpt://${FOLDER_ID}/yandexgpt/latest`,
//       completionOptions: {
//         stream: false,
//         temperature: 1,
//         maxTokens: 100,
//       },
//       messages: [
//         {
//           role: 'user',
//           text: `Ты переводчик. Переведи слово ${word} на ${targetLanguage} с большой буквы без точки, верни только переведённое слово`,
//         },
//       ],
//     }),
//   });
//   const data = await response.json();
//   return data.result.alternatives[0].message.text;
// }
// translateText('ребенок', 'it').then((data) => console.log(data));

// const axios = require('axios');
// async function translateText(text, targetLanguage) {
//   const apiKey = 'AQVN1GWGTTEQBSsgmap1BSfRydGEXblcSKja8edV';
//   const url = 'https://translate.api.cloud.yandex.net/translate/v2/translate';

//   const response = await axios.post(
//     url,
//     {
//       folderId: 'b1ggra6on9uq4vsogm10',
//       texts: [text],
//       targetLanguageCode: targetLanguage,
//     },
//     {
//       headers: {
//         Authorization: `Api-Key ${apiKey}`,
//       },
//     },
//   );

//   return response.data.translations[0].text;
// }

// translateText('Бобёр', 'ja').then((translatedText) => {
//   console.log(translatedText);
// });

// const YandexAuth = require('./src/services/YandexAuth');
// const axios = require('axios');
// require('dotenv').config();

// async function createNewApiKey() {
//   const url = 'https://iam.api.cloud.yandex.net/iam/v1/apiKeys';
//   const response = await axios.post(
//     url,
//     {
//       serviceAccountId: process.env.YANDEX_FOLDER_ID,
//       description: 'Auto-generated API key',
//     },
//     {
//       headers: {
//         Authorization: `Bearer ${await YandexAuth.getIamToken()}`,
//       },
//     },
//   );

//   return response.data.secret;
// }

// createNewApiKey().then((data) => {
//   console.log(data);
// });
