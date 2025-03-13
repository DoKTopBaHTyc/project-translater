const { Translation, Word } = require('../../db/models');

class TranslateService {
  static async getAllLangWord(categoryId, languageId) {
    const words = await Word.findAll({
      attributes: ['name', 'id'],
      where: { categoryId },
      include: [
        {
          model: Translation,
          attributes: ['translation'],
          where: { languageId },
        },
      ],
    });

    const result = words.map((word,index) => ({
      name: words[index].name, 
      id: words[index].id,
      translation: word.Translations[0].translation,
    }));
    return result;
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
