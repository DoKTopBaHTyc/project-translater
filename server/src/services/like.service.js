
const { Like, sequelize, Category} = require('../../db/models');

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

  static async allStudedWordByCategory({ userId }) {
    const result = await Category.findAll({
      attributes: [
        'id',
        'name',
        [sequelize.fn('COUNT', sequelize.col('Likes.wordId')), 'count'],
      ],
      include: [
        {
          model: Like,
          attributes: [],
          where: { userId },
          required: false,
        },
      ],
      group: ['Category.id'],
      raw: true,
    });
    return result;
  }

  

}

module.exports = LikeService;
