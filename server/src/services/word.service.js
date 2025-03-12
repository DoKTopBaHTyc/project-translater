const { Word, Translation } = require('../../db/models');

const translate = require('@vitalets/google-translate-api');

class WordandTranslateService {
  static async getAllLangEn({ languageId }) {
    const words = await Translation.findAll({
      where: { languageId },
      attributes: ['name', 'en'],
    });
    return words;
  }

  static async getAllLangFr({ languageId }) {
    const words = await Translation.findAll({
      where: { languageId },
    });
    return words;
  }

  static async getAllLangJa({ languageId }) {
    const words = await Translation.findAll({
      where: { languageId },
    });
    return words;
  }

  static async createWord() {
    translate('привет', { from: 'ru', to: 'en' })
      .then((res) => {
        console.log(res.text); // Вывод: "hello"
      })
      .catch((err) => {
        console.error('Ошибка перевода:', err);
      });
  }

  static async checkTranslit({ name, id }) {
    const word = await Word.findByPk(id);
    if (word.name.trim().toLowerCase() !== name.trim().toLowerCase()) {
      return false;
    }
    return true;
  }
}


module.exports = WordandTranslateService;
