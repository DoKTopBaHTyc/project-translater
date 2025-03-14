const { Like, Category, Word, Translation, Sequelize } = require('../../db/models');

class LikeService {
  static async WordStuded({ wordId }) {
    const word = await Like.findOne({
      where: { wordId },
    });
    if (word === undefined) {
      return false;
    }
    return true;
  }

  static async createStudedWord({ wordId, userId, categoryId }) {
    const studedword = await Like.create({ wordId, userId, categoryId });
    return studedword;
  }

  static async deleteLikeByUser({ userId }) {
    const likes = await Like.destroy({ where: { userId } });
    return likes;
  }

  static async allStudedWordByCategory({ userId, languageId }) {
    const likeCounts = await Like.findAll({
      attributes: [
        [Sequelize.col('Like.categoryId'), 'categoryId'], // Явно указываем таблицу
        [Sequelize.fn('COUNT', Sequelize.col('Like.id')), 'count'],
      ],
      include: [
        {
          model: Word,
          attributes: [],
          include: [
            {
              model: Translation,
              attributes: [],
              where: { languageId }, // Фильтруем по languageId
              required: true, // Используем INNER JOIN
            },
          ],
          required: true, // Используем INNER JOIN
        },
      ],
      where: { userId }, // Фильтруем по userId
      group: ['Like.categoryId'], // Явно указываем таблицу для группировки
      raw: true, // Возвращаем сырые данные
    });

    // Шаг 2: Получаем общее количество слов по languageId для каждой категории
    const totalCounts = await Word.findAll({
      attributes: [
        [Sequelize.col('Word.categoryId'), 'categoryId'], // Явно указываем таблицу
        [Sequelize.fn('COUNT', Sequelize.col('Word.id')), 'totalCount'],
      ],
      include: [
        {
          model: Translation,
          attributes: [],
          where: { languageId }, // Фильтруем по languageId
          required: true, // Используем INNER JOIN
        },
      ],
      group: ['Word.categoryId'], // Явно указываем таблицу для группировки
      raw: true, // Возвращаем сырые данные
    });

    // Шаг 3: Получаем информацию о категориях
    const categories = await Category.findAll({
      attributes: ['id', 'name'], // Получаем id и name категорий
      raw: true,
    });

    const result = categories.map((category) => {
      const likeCount =
        likeCounts.find((item) => item.categoryId === category.id)?.count || 0;
      const totalCount =
        totalCounts.find((item) => item.categoryId === category.id)?.totalCount || 0;

      return {
        categoryId: category.id,
        categoryName: category.name,
        count: likeCount,
        totalCount,
      };
    });

    return result;
  }
}

module.exports = LikeService;
