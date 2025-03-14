const { Like, Category, sequelize, Word } = require('../../db/models');

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

  static async allStudedWordByCategory({ userId }) {
    const userLikeCounts = await Like.findAll({
      attributes: [
        'categoryId',
        [sequelize.fn('COUNT', sequelize.col('wordId')), 'count'],
      ],
      where: { userId },
      group: ['categoryId'],
      raw: true,
    });
    const totalWordCounts = await Word.findAll({
      attributes: [
        'categoryId',
        [sequelize.fn('COUNT', sequelize.col('id')), 'totalCount'],
      ],
      group: ['categoryId'],
      raw: true,
    });
    const categories = await Category.findAll({
      attributes: ['id', 'name'],
      raw: true,
    });

    const userLikeCountsMap = userLikeCounts.reduce((acc, item) => {
      acc[item.categoryId] = item.count;
      return acc;
    }, {});

    const totalWordCountsMap = totalWordCounts.reduce((acc, item) => {
      acc[item.categoryId] = item.totalCount;
      return acc;
    }, {});

    const result = categories.map((category) => ({
      categoryId: category.id,
      categoryName: category.name,
      count: userLikeCountsMap[category.id] || 0,
      totalCount: Number(totalWordCountsMap[category.id]) || 0,
    }));
    return result;
  }
}

module.exports = LikeService;
