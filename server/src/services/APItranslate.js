const axios = require('axios');

class ApiTranslate {
  static async translateText(text, targetLanguage) {
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
}

module.exports = ApiTranslate;
