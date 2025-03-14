class ApiContext {
  static async contextText(word) {
    const IAM_TOKEN =
      't1.9euelZqZycnIi5CczZrNnMrGjI2ZyO3rnpWanc-ZzsaNlJTImpONnpSKjI_l8_dSVzBB-e9-JzFU_t3z9xIGLkH5734nMVT-zef1656VmpHOmZubmprKz5zLkZOeksjP7_zF656VmpHOmZubmprKz5zLkZOeksjP.h1HYkC3ItleSDxDBfJfa93zBSSBE1M3cSOZqZfbOqHvjJzmNO4e2Ia4bL7TL17MkWeAzxoqK6YBSPBFe7xM0AA';
    const API_URL = 'https://llm.api.cloud.yandex.net/foundationModels/v1/completion';
    const FOLDER_ID = 'b1ggra6on9uq4vsogm10';
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${IAM_TOKEN}`,
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
