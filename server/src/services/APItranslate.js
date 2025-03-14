const axios = require('axios');

class ApiTranslate {
  static async translateText(text, targetLanguage) {
    const apiKey = 'AQVN1GWGTTEQBSsgmap1BSfRydGEXblcSKja8edV';
    const url = 'https://translate.api.cloud.yandex.net/translate/v2/translate';

    const response = await axios.post(
      url,
      {
        folderId: 'b1ggra6on9uq4vsogm10',
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
