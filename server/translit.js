

// const API_URL = 'https://llm.api.cloud.yandex.net/foundationModels/v1/completion';
const IAM_TOKEN =
  't1.9euelZqWnJfHl4yUyYybis2Rmc2Nyu3rnpWanc-ZzsaNlJTImpONnpSKjI_l9Pd9SDRB-e94BEq-3fT3PXcxQfnveARKvs3n9euelZqPnpWejZrNlc3Gmoyem42cie_8xeuelZqPnpWejZrNlc3Gmoyem42ciQ.9I4wnIHTKHTBP6nCIJkeiwwX5xeR9Y0P9b02AJjrHBbXfxmermXiQ9mNwTR3hsnGQa4m-C38oneSbB5uuJ4tBw';
// const FOLDER_ID = 'b1ggra6on9uq4vsogm10';

const API_URL = 'https://llm.api.cloud.yandex.net/foundationModels/v1/completion';
const FOLDER_ID = 'b1ggra6on9uq4vsogm10';

async function generateSentence(word) {
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
          text: `Составь осмысленное предложение с использованием слова "${word}":`,
        },
      ],
    }),
  });

  const data = await response.json();
  if (data.result && data.result.alternatives && data.result.alternatives[0]) {
    return data.result.alternatives[0].message.text;
  } else {
    console.error('Ответ не содержит "alternatives"', data);
    return 'Ошибка в ответе от API';
  }
}

generateSentence('pomme').then((data) => console.log(data));


