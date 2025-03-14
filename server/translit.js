const API_URL = 'https://llm.api.cloud.yandex.net/foundationModels/v1/completion';
const FOLDER_ID = 'b1ggra6on9uq4vsogm10';
const YandexAuth = require('./src/services/YandexAuth');
async function generateSentence(word) {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${await YandexAuth.getIamToken()}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      modelUri: `gpt://${FOLDER_ID}/yandexgpt/latest`,
      completionOptions: {
        stream: false,
        temperature: 0.6,
        maxTokens: 100,
      },
      messages: [
        {
          role: 'user',
          text: `Составь осмысленное предложение с использованием слова "${word}" и перевод предложения. Результат пришли в виде массива из двух элементов, предложения с большой буквы:`,
        },
      ],
    }),
  });
  const data = await response.json();
  return data.result.alternatives[0].message.text;
}
generateSentence('tv').then((data) => console.log(data));

// const axios = require('axios');
// const YandexAuth = require('./src/services/YandexAuth');
// async function translateText(text, targetLanguage) {
//   const apiKey = await YandexAuth.getIamToken();
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

// translateText('Орёл', 'en').then((translatedText) => {
//   console.log(translatedText);
// });

// const axios = require('axios');

// class YandexAuth {
//   static async getIamToken() {
//     const response = await axios.post('https://iam.api.cloud.yandex.net/iam/v1/tokens', {
//       yandexPassportOauthToken: process.env.YANDEX_OAUTH_TOKEN,
//     });

//     return response.data.iamToken;
//   }
// }

// module.exports = YandexAuth;
