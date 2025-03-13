const axios = require('axios');

const getTopicFromYandex = async (word) => {
  const apiKey = 'AQVNxUW8m1WpSmFRpaPOKXTrZk4AlJSJopwGOLRd'; // Замени на свой API-ключ
  const url = 'https://llm.api.cloud.yandex.net/foundationModels/v1/completion';

  const data = {
    text: word,
  };

  try {
    const response = await axios.post(url, data, {
      headers: {
        Authorization: `Api-Key ${apiKey}`,
        'Content-Type': 'application/json',
      },
    });

    console.log(response.data);
  } catch (error) {
    console.error('Ошибка:', error.response ? error.response.data : error.message);
  }
};

getTopicFromYandex('Программирование');
