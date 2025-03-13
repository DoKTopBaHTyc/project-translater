const { Like } = require('../../db/models');

class LikeService {
  static async WordStuded(wordId) {
    const word = await Like.findOne({
      where: { wordId },
    });
    if(word === undefined){
        return false
    }
    return true;
  }
}

module.exports = LikeService;
