const { Word } = require('../../db/models');

class WordService {
  static async createWord({ name, userId, categoryId }) {
    const word = await Word.create({ name, userId, categoryId });
    return word;
  }

  static async updateWord({ name, id }) {
    const word = await Word.findByPk(id);
    const updateword = await word.update({ name });
    return updateword;
  }

  static async deleateWord({ id }) {
    const deletedRows = await Word.destroy({ where: { id } });
    return deletedRows;
  }


}

module.exports = WordService;
