// sk-or-v1-3c2c9ff0093f2623e83169d75ae6d1b57de17ffd503a7e0ab9eac420564cb,

const axios = require('axios');

async function translateText(text, targetLanguage) {
  const apiKey = 'AQVN2sBsUfu6f0a_tUiNwhoe_MbU1JIZYN-wxY8k';
  const url = 'https://translate.api.cloud.yandex.net/translate/v2/translate';

  const response = await axios.post(
    url,
    {
      folderId: 'b1gvrtc5c3p9ej8oeisv',
      texts: [text],
      targetLanguageCode: targetLanguage,
    },
    {
      headers: {
        Authorization: `Api-Key ${apiKey}`,
      },
    },
  );

  return response.data.translations[0].text;
}

// Пример использования
translateText('Привет, как дела?', 'en')
  .then((translation) => console.log('Перевод:', translation))
  .catch((error) => console.error('Ошибка:', error));



