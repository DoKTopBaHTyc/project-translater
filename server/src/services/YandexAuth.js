const axios = require('axios');
require('dotenv').config();
class YandexAuth {
  static async getIamToken() {
    const response = await axios.post('https://iam.api.cloud.yandex.net/iam/v1/tokens', {
      yandexPassportOauthToken: process.env.YANDEX_OAUTH_TOKEN,
    });

    return response.data.iamToken;
  }
}

module.exports = YandexAuth;
