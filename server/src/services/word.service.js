const { Word, Translation, Language } = require('../../db/models');
const ApiTranslate = require('../services/APItranslate');

class WordService {
  static async createWord({ name, userId, categoryId, languageId }) {
    const prevword = await Word.findOne({ where: { name } }
    );
    if (prevword !== undefined) {
      throw new Error(`Данное слово уже существует`);
    }
    const word = await Word.create({ name, userId, categoryId });

    const language = await Language.findOne({
      attributes: ['name'],
      where: { id: languageId },
    });

    const translationword = await ApiTranslate.translateText(word.name, language.name);

    const translate = await Translation.create({
      translation: translationword,
      wordId: word.id,
      languageId: Number(languageId),
    });
    const result = { name: word, translatename: translate };
    return result;
  }

  static async updateWord({ name, id }) {
    const word = await Word.findByPk(Number(id));
    const updateword = await word.update({ name });
    return updateword;
  }

  static async deleateWord({ id }) {
    const deletedRows = await Word.destroy({ where: { id } });
    return deletedRows;
  }
}

module.exports = WordService;
