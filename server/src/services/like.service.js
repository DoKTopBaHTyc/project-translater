const { Like } = require('../../db/models');

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

  static async allStudedWordByCategory({ userId, categoryId }) {
    const studeвCount = await Like.count({
      where: {
        userId,
        categoryId,
      },
    });

    return studeвCount;
  }
}

module.exports = LikeService;
