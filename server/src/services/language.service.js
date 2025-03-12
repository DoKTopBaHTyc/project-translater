const { Language } = require('../../db/models');

class LanguageService {
  static async getAllCategory() {
    const langs = await Language.findAll();
    return langs;
  }
}

module.exports = LanguageService;
