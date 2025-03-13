const { Translation, Word } = require('../../db/models');

class TranslateService {
  static async getAllLangWord(languageId) {
    const words = await Word.findAll({
      attributes: ['name'],
      include: [
        {
          model: Translation,
          attributes: ['translation'],
          where: { languageId },
        },
      ],
    });

    const result = words.map((word,index) => ({
      name: word.name,
      translation: word.Translations[index].translation,
    }));
    return result;
  }

  static async createTranslation({ wordId, languageId, translation }) {
    const word = await Translation.create({ wordId, languageId, translation });
    return word;
  }

  static async updateTranslation({ translation, id }) {
    const word = await Translation.findByPk(id);
    const updateword = await word.update({ translation });
    return updateword;
  }

  static async deleateTranslation({ id }) {
    const deletedRows = await Translation.destroy({ where: { id } });
    return deletedRows;
  }

  static async checkTranslit({ translation, id }) {
    const word = await Translation.findByPk(id);
    if (word.translation.trim().toLowerCase() !== translation.trim().toLowerCase()) {
      return false;
    }
    return true;
  }
}

module.exports = TranslateService;
