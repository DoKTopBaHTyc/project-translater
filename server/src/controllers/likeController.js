const { LikeService } = require('../services/like.service');

class LikeController {
  static async WordStuded(req, res) {
    try {
      const boolean = await LikeService.WordStuded();
      res.status(200).json({ message: boolean });
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  }
}

module.exports = LikeController;
