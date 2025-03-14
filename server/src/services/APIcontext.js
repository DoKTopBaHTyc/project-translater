const YandexAuth = require('./YandexAuth');
class ApiContext {
  static async contextText(word) {
    const API_URL = 'https://llm.api.cloud.yandex.net/foundationModels/v1/completion';
    const FOLDER_ID = 'b1ggra6on9uq4vsogm10';
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
}

module.exports = ApiContext;
