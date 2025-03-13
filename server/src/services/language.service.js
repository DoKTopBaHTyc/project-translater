const { Language } = require('../../db/models');

class LanguageService {
  static async getAllLanguage() {
    const langs = await Language.findAll();
    return langs;
  }
}

module.exports = LanguageService;
