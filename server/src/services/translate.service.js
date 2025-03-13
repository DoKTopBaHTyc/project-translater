const { Translation } = require('../../db/models');

class TranslateService {
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
